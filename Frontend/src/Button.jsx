function Button({variant, size, children,...rest}) {
    return <div>
        <button className={`btn btn-${variant} btn-${size} `} {...rest}> {children}</button>
    </div>;
}

export default Button;