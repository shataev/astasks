/**
 * Вынес сюда основные настройки и параметры для отрисовки звезд
 */

export const SPIKES_COUNT = 5;
export const OUTER_RADIUS = 90;
export const INNER_RADIUS = 40

export const STAR_BASE_PROPS = {
    spikes: SPIKES_COUNT,
    outerRadius: OUTER_RADIUS,
    innerRadius: INNER_RADIUS,
}

/**
 * Массив с настройками для отрисовки каждой звезды
 */
export const STARS_CONFIG = [
    {
        cxFactor: 0.5,
        cyFactor: 0.5,
        fillColor: 'red',
        ...STAR_BASE_PROPS,
    },
    {
        cxFactor: 0.25,
        cyFactor: 0.75,
        fillColor: 'blue',
        ...STAR_BASE_PROPS,
    },
    {
        cxFactor: 0.25,
        cyFactor: 0.25,
        fillColor: 'green',
        ...STAR_BASE_PROPS,
    },
    {
        cxFactor: 0.75,
        cyFactor: 0.25,
        fillColor: 'yellow',
        ...STAR_BASE_PROPS,
    },
    {
        cxFactor: 0.75,
        cyFactor: 0.75,
        fillColor: 'black',
        ...STAR_BASE_PROPS,
    }
]