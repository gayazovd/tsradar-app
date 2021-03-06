import {animate, group, query, style, transition, trigger} from '@angular/animations';

export const slider = trigger('routeAnimation', [
  transition('* => isLeft', slideTo('left')),
  transition('* => isRight', slideTo('right')),
  transition('isRight => *', slideTo('left')),
  transition('isLeft => *', slideTo('right'))
])

function slideTo(direction: string) {
  const optional = {optional: true}
  return [
    query(':enter, :leave', [
      style({
        position: 'absolute',
        top: 0,
        [direction]: 0,
        width: '100%',
        opacity: 1
      })
    ], optional),
    query(':enter', [
      style({
        [direction]: '100%',
      })
    ], optional),
    group([
      query(':leave', [
        animate('400ms ease', style({
          [direction]: '-100%',
          opacity: 0
        }))
      ], optional),
      query(':enter', [
        animate('400ms ease', style({
          [direction]: '0%',
          opacity: 1
        }))
      ], optional)
    ])
  ]
}
