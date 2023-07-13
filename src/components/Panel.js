import classNames from "classnames";

function Panel({children, className, ...rest}){
    const ClassNames = classNames(
        'border rounded p-3 shadow bg-white w-full',
        className
    )
    return <div {...rest} className={ClassNames}>{children}</div>
}

export default Panel;