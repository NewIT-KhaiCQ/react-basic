// const Button = ({title, href, onClick}) => {
//     let Component = 'button';
//     const props = {};
//     if (href) {
//         Component
//         props.href = href;
//     }
//     if (onClick) {
//         props.onClick = onClick;
//     }
    
//     return (
//         <Component {...props}>{title}</Component>
//     )
// }

const Button = (props) => {
    console.log(...props);  
}
export default Button;