/**
 * Показывает/скрывает элемент, изменяя его свойство display
 * @param el - элемент, который необходимо скрыть/показать
 * @param isVisible - флаг "видимости" элемента. По умолчанию true
 */
export const toggleElementVisibility = ( el, isVisible = true ) => {
    el.style.display = isVisible ? null : 'none';
}