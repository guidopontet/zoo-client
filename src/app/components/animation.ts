// DEFINIMOS LAS ANIMACIONES

import {animate, state, style, transition, trigger} from '@angular/core'

export const fadeIn=
	trigger('fadeIn',[
				// Cuando entramos al componente
				transition(':enter',[
					style({
						opacity: 0
					}),
					animate('500ms linear',
						style({
						opacity: 1
						})
					)
				])
			])