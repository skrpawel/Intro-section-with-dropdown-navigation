const Button = ({ context }) => {
    return (<button className={context === 'Login' ? 'login' : 'other'}>
        {context}
    </button>);
}

export default Button;