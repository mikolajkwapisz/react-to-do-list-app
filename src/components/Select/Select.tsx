import styles from './select.module.css'
import { useEffect, useState } from 'react'
import { SelectOption, SelectProps } from '../../types/types'


export default function Select( { options, value, onChange, fullWidth, hoverColor}: SelectProps ) {
    const [isOpen, setIsOpen ] = useState(false)
    const [highlightedIndex, setHighlightedIndex ] = useState(0)
    const [isHover, setIsHover] = useState(false)

    const hoverStyles = typeof hoverColor === 'string' ? {borderColor: `${hoverColor}`} : {}

    function selectOption (option: SelectOption) {
        onChange(option)
    }
    
    function isSelected (option: SelectOption) {
        return option === value
    }

    useEffect( () => {
        if(isOpen) setHighlightedIndex(0)
    }, [isOpen])


    return (
        <div 
            onBlur={() => setIsOpen(false)}
            tabIndex={0} 
            onClick={ () => setIsOpen( prev => !prev)} 
            className={ !fullWidth ? styles.container : styles.containerFullWidth}
            style = {isHover ? hoverStyles: {}}
            onMouseEnter={() => setIsHover(true)}
            onMouseLeave={() => setIsHover(false)}
            >
            <span className={styles.value}>{value?.label}</span>
            <div className={styles.caret}></div>
            <ul className={`${styles.options} ${ isOpen ? styles.show : "" }`}>
                { options.map( (option, index) => (
                    <li 
                    onMouseEnter={ () => setHighlightedIndex(index)}
                    onClick = { e => {
                        e.stopPropagation()
                        selectOption(option)
                        setIsOpen(false)
                    }}
                    key={option.value }
                    className={`${styles.option} ${ isSelected(option) ? styles.selected : ""}
                      ${ index === highlightedIndex ? styles.highlighted : ""}`}
                      >
                        {option.label}
                    </li>
                ))}
            </ul>
        </div>
    )
}