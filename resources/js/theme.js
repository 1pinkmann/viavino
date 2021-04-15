import gsap from 'gsap'

class App {
    constructor() {
        this.initDefaults()
        this.initElements()
        this.initTimeline()
    }

    initDefaults() {
        let defaults = gsap.defaults()

        this.duration = defaults.duration
        this.sequence = [ 'intro', 'rosato', 'rosso', 'bianco' ]

        this.current = null
        this.target  = null

        this.enabled = false
    }

    initElements() {
        this.els = {
            // Intro
            introSection: document.querySelector('.intro'),
            introDecor: document.querySelector('.intro .intro__decor--1'),
            introLogo: document.querySelector('.intro .intro__logo'),
            introHeading: document.querySelector('.intro .intro__heading'),
            introText: document.querySelector('.intro .intro__text'),
            // Rosato
            rosatoSection: document.querySelector('.wine--rosato'),
            rosatoCan: document.querySelector('.wine--rosato .wine__can'),
            rosatoDecor1: document.querySelector('.wine--rosato .wine__decor--1'),
            rosatoDecor2: document.querySelector('.wine--rosato .wine__decor--2'),
            rosatoType: document.querySelector('.wine--rosato .wine__type'),
            rosatoHeading: document.querySelector('.wine--rosato .wine__name'),
            rosatoText1: document.querySelector('.wine--rosato .wine__description--1'),
            rosatoText2: document.querySelector('.wine--rosato .wine__description--2'),
            rosatoText3: document.querySelector('.wine--rosato .wine__description--3'),
            rosatoFeatures: document.querySelector('.wine--rosato .wine__features'),
            // Rosso
            rossoSection: document.querySelector('.wine--rosso'),
            rossoCan: document.querySelector('.wine--rosso .wine__can'),
            rossoDecor1: document.querySelector('.wine--rosso .wine__decor--1'),
            rossoDecor2: document.querySelector('.wine--rosso .wine__decor--2'),
            rossoType: document.querySelector('.wine--rosso .wine__type'),
            rossoHeading: document.querySelector('.wine--rosso .wine__name'),
            rossoText1: document.querySelector('.wine--rosso .wine__description--1'),
            rossoText2: document.querySelector('.wine--rosso .wine__description--2'),
            rossoText3: document.querySelector('.wine--rosso .wine__description--3'),
            rossoFeatures: document.querySelector('.wine--rosso .wine__features'),
            // Bianco
            biancoSection: document.querySelector('.wine--bianco'),
            biancoCan: document.querySelector('.wine--bianco .wine__can'),
            biancoDecor1: document.querySelector('.wine--bianco .wine__decor--1'),
            biancoDecor2: document.querySelector('.wine--bianco .wine__decor--2'),
            biancoType: document.querySelector('.wine--bianco .wine__type'),
            biancoHeading: document.querySelector('.wine--bianco .wine__name'),
            biancoText1: document.querySelector('.wine--bianco .wine__description--1'),
            biancoText2: document.querySelector('.wine--bianco .wine__description--2'),
            biancoText3: document.querySelector('.wine--bianco .wine__description--3'),
            biancoFeatures: document.querySelector('.wine--bianco .wine__features'),
        }
    }

    initTimeline() {
        const calcDuration           = (d) => this.duration * d / 6
        const setCurrentHandler      = (c) => () => this.setCurrent(c)
        const maybeSeekTargetHandler = () => () => this.maybeSeekTarget()

        this.tl = gsap.timeline({ paused: true })

        this.tl.addLabel('introIn')
        this.tl.call(() => gsap.set(document.body, { className: 'page page--intro' }))
        this.tl.add(
            gsap.timeline()
                .set(this.els.introSection, { autoAlpha: 1, immediateRender: false })
                .to(this.els.introDecor, { autoAlpha: 1, scale: 1, duration: calcDuration(8) }, calcDuration(0))
                .to(this.els.introLogo, { autoAlpha: 1, y: 0 }, calcDuration(1))
                .to(this.els.introHeading, { autoAlpha: 1, y: 0 }, calcDuration(2))
                .to(this.els.introText, { autoAlpha: 1, y: 0 }, calcDuration(3))
        )
        this.tl.addLabel('introOutReverse')
    
        this.tl.addPause('+=0', setCurrentHandler('intro'))
    
        this.tl.addLabel('introOut')
        this.tl.add(
            gsap.timeline()
                .to(this.els.introDecor, { autoAlpha: 0, scale: 1.1, duration: calcDuration(8) }, calcDuration(0))
                .to(this.els.introLogo, { autoAlpha: 0, y: -10 }, calcDuration(0))
                .to(this.els.introHeading, { autoAlpha: 0, y: -10 }, calcDuration(1))
                .to(this.els.introText, { autoAlpha: 0, y: -10 }, calcDuration(2))
                .set(this.els.introSection, { autoAlpha: 0, immediateRender: false })
        )
        this.tl.call(() => gsap.set(document.body, { className: 'page page--intro' }))
        this.tl.addLabel('introInReverse')
    
        this.tl.call(maybeSeekTargetHandler())
    
        this.tl.addLabel('rosatoIn')
        this.tl.call(() => gsap.set(document.body, { className: 'page page--rosato' }))
        this.tl.add(
            gsap.timeline()
                .set(this.els.rosatoSection, { autoAlpha: 1, immediateRender: false })
                .to(this.els.rosatoCan, { autoAlpha: 1, x: 0 }, calcDuration(0))
                .to(this.els.rosatoDecor1, { autoAlpha: 1, y: 0 }, calcDuration(0))
                .to(this.els.rosatoDecor2, { autoAlpha: 1, y: 0 }, calcDuration(0))
                .to(this.els.rosatoType, { autoAlpha: 1, y: 0 }, calcDuration(.5))
                .to(this.els.rosatoHeading, { autoAlpha: 1, y: 0 }, calcDuration(1))
                .to(this.els.rosatoText1, { autoAlpha: 1, y: 0 }, calcDuration(1.5))
                .to(this.els.rosatoText2, { autoAlpha: 1, y: 0 }, calcDuration(2))
                .to(this.els.rosatoText3, { autoAlpha: 1, y: 0 }, calcDuration(2.5))
                .to(this.els.rosatoFeatures, { autoAlpha: 1, y: 0 }, calcDuration(3))
        )
        this.tl.addLabel('rosatoOutReverse')
    
        this.tl.addPause('+=0', setCurrentHandler('rosato'))
    
        this.tl.addLabel('rosatoOut')
        this.tl.add(
            gsap.timeline()
                .to(this.els.rosatoCan, { autoAlpha: 0, x: 20 }, calcDuration(0))
                .to(this.els.rosatoDecor1, { autoAlpha: 0, y: -10 }, calcDuration(0))
                .to(this.els.rosatoDecor2, { autoAlpha: 0, y: -10 }, calcDuration(0))
                .to(this.els.rosatoType, { autoAlpha: 0, y: -10 }, calcDuration(.5))
                .to(this.els.rosatoHeading, { autoAlpha: 0, y: -10 }, calcDuration(1))
                .to(this.els.rosatoText1, { autoAlpha: 0, y: -10 }, calcDuration(1.5))
                .to(this.els.rosatoText2, { autoAlpha: 0, y: -10 }, calcDuration(2))
                .to(this.els.rosatoText3, { autoAlpha: 0, y: -10 }, calcDuration(2.5))
                .to(this.els.rosatoFeatures, { autoAlpha: 0, y: -10 }, calcDuration(3))
                .set(this.els.rosatoSection, { autoAlpha: 0, immediateRender: false })
        )
        this.tl.call(() => gsap.set(document.body, { className: 'page page--rosato' }))
        this.tl.addLabel('rosatoInReverse')
    
        this.tl.call(maybeSeekTargetHandler())
    
        this.tl.addLabel('rossoIn')
        this.tl.call(() => gsap.set(document.body, { className: 'page page--rosso' }))
        this.tl.add(
            gsap.timeline()
                .set(this.els.rossoSection, { autoAlpha: 1, immediateRender: false })
                .to(this.els.rossoCan, { autoAlpha: 1, x: 0 }, calcDuration(0))
                .to(this.els.rossoDecor1, { autoAlpha: 1, y: 0 }, calcDuration(0))
                .to(this.els.rossoDecor2, { autoAlpha: 1, y: 0 }, calcDuration(0))
                .to(this.els.rossoType, { autoAlpha: 1, y: 0 }, calcDuration(.5))
                .to(this.els.rossoHeading, { autoAlpha: 1, y: 0 }, calcDuration(1))
                .to(this.els.rossoText1, { autoAlpha: 1, y: 0 }, calcDuration(1.5))
                .to(this.els.rossoText2, { autoAlpha: 1, y: 0 }, calcDuration(2))
                .to(this.els.rossoText3, { autoAlpha: 1, y: 0 }, calcDuration(2.5))
                .to(this.els.rossoFeatures, { autoAlpha: 1, y: 0 }, calcDuration(3))
        )
        this.tl.addLabel('rossoOutReverse')
    
        this.tl.addPause('+=0', setCurrentHandler('rosso'))
    
        this.tl.addLabel('rossoOut')
        this.tl.add(
            gsap.timeline()
                .to(this.els.rossoCan, { autoAlpha: 0, x: 20 }, calcDuration(0))
                .to(this.els.rossoDecor1, { autoAlpha: 0, y: -10 }, calcDuration(0))
                .to(this.els.rossoDecor2, { autoAlpha: 0, y: -10 }, calcDuration(0))
                .to(this.els.rossoType, { autoAlpha: 0, y: -10 }, calcDuration(.5))
                .to(this.els.rossoHeading, { autoAlpha: 0, y: -10 }, calcDuration(1))
                .to(this.els.rossoText1, { autoAlpha: 0, y: -10 }, calcDuration(1.5))
                .to(this.els.rossoText2, { autoAlpha: 0, y: -10 }, calcDuration(2))
                .to(this.els.rossoText3, { autoAlpha: 0, y: -10 }, calcDuration(2.5))
                .to(this.els.rossoFeatures, { autoAlpha: 0, y: -10 }, calcDuration(3))
                .set(this.els.rossoSection, { autoAlpha: 0, immediateRender: false })
        )
        this.tl.call(() => gsap.set(document.body, { className: 'page page--rosso' }))
        this.tl.addLabel('rossoInReverse')
    
        this.tl.call(maybeSeekTargetHandler())
    
        this.tl.addLabel('biancoIn')
        this.tl.call(() => gsap.set(document.body, { className: 'page page--bianco' }))
        this.tl.add(
            gsap.timeline()
                .set(this.els.biancoSection, { autoAlpha: 1, immediateRender: false })
                .to(this.els.biancoCan, { autoAlpha: 1, x: 0 }, calcDuration(0))
                .to(this.els.biancoDecor1, { autoAlpha: 1, y: 0 }, calcDuration(0))
                .to(this.els.biancoDecor2, { autoAlpha: 1, y: 0 }, calcDuration(0))
                .to(this.els.biancoType, { autoAlpha: 1, y: 0 }, calcDuration(.5))
                .to(this.els.biancoHeading, { autoAlpha: 1, y: 0 }, calcDuration(1))
                .to(this.els.biancoText1, { autoAlpha: 1, y: 0 }, calcDuration(1.5))
                .to(this.els.biancoText2, { autoAlpha: 1, y: 0 }, calcDuration(2))
                .to(this.els.biancoText3, { autoAlpha: 1, y: 0 }, calcDuration(2.5))
                .to(this.els.biancoFeatures, { autoAlpha: 1, y: 0 }, calcDuration(3))
        )
        this.tl.addLabel('biancoOutReverse')
    
        this.tl.call(setCurrentHandler('bianco'))
    }

    setCurrent(c) {
        this.current = c
    }

    maybeSetTarget(t) {
        if (this.current === t)
            return
        
        let offset = this.sequence.indexOf(t) - this.sequence.indexOf(this.current)

        if (offset < -1 || offset > 1) 
            this.target = t

        if (offset < 0)
            this.playBackwards()
        else
            this.playForwards()
    }

    maybeSeekTarget() {
        if (this.target === null)
            return

        this.tl.pause()
        this.tl.seek(this.target + 'In' + (this.sequence.indexOf(this.target) < this.sequence.indexOf(this.current) ? 'Reverse' : ''))
        this.tl.resume()

        this.target = null
    }

    playBackwards() {
        if (this.enabled && this.tl.previousLabel() !== 'introIn')
            this.tl.reverse()
    }

    playForwards() {
        if (this.enabled && this.tl.previousLabel() !== 'biancoOutReverse')
            this.tl.play()
    }

    off() {
        if (!this.enabled)
            return

        gsap.set(document.body, {
            className: 'page'
        })

        gsap.set(this.els.introDecor, {
            clearProps: 'rotate,transform,opacity,visibility'
        })

        gsap.set([
            this.els.introLogo,
            this.els.introHeading,
            this.els.introText,
            this.els.rosatoDecor1,
            this.els.rosatoDecor2,
            this.els.rosatoType,
            this.els.rosatoHeading,
            this.els.rosatoText1,
            this.els.rosatoText2,
            this.els.rosatoText3,
            this.els.rosatoFeatures,
            this.els.rossoDecor1,
            this.els.rossoDecor2,
            this.els.rossoType,
            this.els.rossoHeading,
            this.els.rossoText1,
            this.els.rossoText2,
            this.els.rossoText3,
            this.els.rossoFeatures,
            this.els.biancoDecor1,
            this.els.biancoDecor2,
            this.els.biancoType,
            this.els.biancoHeading,
            this.els.biancoText1,
            this.els.biancoText2,
            this.els.biancoText3,
            this.els.biancoFeatures,
        ], {
            clearProps: 'rotate,y,opacity,visibility'
        })

        gsap.set([
            this.els.rosatoCan,
            this.els.rossoCan,
            this.els.biancoCan
        ], {
            clearProps: 'rotate,x,opacity,visibility'
        })

        gsap.set([
            this.els.introSection,
            this.els.rosatoSection,
            this.els.rossoSection,
            this.els.biancoSection
        ], {
            clearProps: 'opacity,visibility'
        })
    
        this.enabled = false
    }

    on() {
        if (this.enabled)
            return

        gsap.set(this.els.introDecor, {
            scale: 1.1,
            rotate: 0.01
        })

        gsap.set([
            this.els.introLogo,
            this.els.introHeading,
            this.els.introText,
            this.els.rosatoDecor1,
            this.els.rosatoDecor2,
            this.els.rosatoType,
            this.els.rosatoHeading,
            this.els.rosatoText1,
            this.els.rosatoText2,
            this.els.rosatoText3,
            this.els.rosatoFeatures,
            this.els.rossoDecor1,
            this.els.rossoDecor2,
            this.els.rossoType,
            this.els.rossoHeading,
            this.els.rossoText1,
            this.els.rossoText2,
            this.els.rossoText3,
            this.els.rossoFeatures,
            this.els.biancoDecor1,
            this.els.biancoDecor2,
            this.els.biancoType,
            this.els.biancoHeading,
            this.els.biancoText1,
            this.els.biancoText2,
            this.els.biancoText3,
            this.els.biancoFeatures,
        ], {
            y: 10,
            rotate: 0.01
        })

        gsap.set([
            this.els.rosatoCan,
            this.els.rossoCan,
            this.els.biancoCan
        ], {
            x: 20,
            rotate: 0.01
        })
    
        this.tl.restart()

        this.enabled = true
    }
}

const addClass = (el, className) => {
    if (el.className.includes(className))
        return

    let classes = el.className.split(' ')
    classes.push(className)

    el.className = classes.join(' ')
}

const removeClass = (el, className) => {
    if (!el.className.includes(className))
        return

    let classes = el.className.split(' ')
    classes.splice(classes.indexOf(className), 1)

    el.className = classes.join(' ')
}

gsap.defaults({
    duration: .5,
    ease:     'power1.inOut'
})

const app = new App()

const stickyHeaderBar = document.querySelector('.header__bar--sticky')

window.addEventListener('resize', () => {
    if (document.body.clientWidth < 1060)
        app.off()
    else
        app.on()
})

window.addEventListener('scroll', () => {
    if (window.scrollY > 0 && document.body.clientWidth < 1060) {
        addClass(stickyHeaderBar, 'header__bar--stuck')
    } else {
        removeClass(stickyHeaderBar, 'header__bar--stuck')
    }
})

window.addEventListener('wheel', e => {
    if (Math.sign(e.deltaY) * -1 > 0)
        app.playBackwards()
    else
        app.playForwards()
})

document.querySelectorAll('.js-navigate[data-gsap-target-id]').forEach(el => {
    el.addEventListener('click', e => {
        e.preventDefault()

        app.maybeSetTarget(el.dataset.gsapTargetId)
    })
})

document.querySelector('.hamburger').addEventListener('click', function(e) {
    e.preventDefault()

    if (document.body.className.includes('page--dialog'))
        removeClass(document.body, 'page--dialog')
    else
        addClass(document.body, 'page--dialog')
})

document.addEventListener('DOMContentLoaded', () => {
    window.dispatchEvent(new Event('resize'))
    window.dispatchEvent(new Event('scroll'))
})