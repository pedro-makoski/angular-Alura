import { animate, state, style, transition, trigger } from '@angular/animations';

export const highlitedStateTrigger = trigger('highlightedState', [
    state('default', style({
      border: '2px solid #B2B6FF',
    })),
    state('highlighted', style({
      outline: '4px solid #B2B6FF',
      filter: "brightness(92%)"
    })),
    transition('default <=> highlighted', [
      animate('0.2s 0s ease-out', 
        style({
          transform: 'scale(1.02)',
        }),
      ),
      animate(200)
    ]),
  ])

  export const showStateTrigger = trigger('showState', [
    transition(':enter', [
      style({
        opacity: 0
      }),
      animate(300, style({
        opacity: 1,
      }))
    ]),
    transition(':leave', [
      animate(300, style({
        opacity: 0,
      }))
    ]),
  ])

export const checkTrigger = trigger('checkItem', [
    state('check', style({})),
    transition('void => check', [
    style({
      transform: 'scale(1)'   
    }),
    animate(100, style({
      transform: 'scale(0.9)'       
    })),
    animate(100, style({
      transform: 'scale(1)'
    })),
    animate(100, style({
      transform: 'scale(1) rotate(360deg)'
    })),
  ]),
  ])