// DEFINIMOS LAS ANIMACIONES

import {animate, state, style, transition, trigger} from '@angular/core'

export const fadeLateral=
	trigger('fadeLateral',[
				// Cuando entramos al componente
				transition(':enter',[
					style({
						opacity: 0,
						transform:'translateX(-30%)'
					}),
					animate('350ms ease-in',
						style({
						opacity: 1,
						transform:'translateX(0)'
						})
					)
				])
			])