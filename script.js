const React = {
    createElement: function( type, props, content ) {
        let result = document.createElement(type);
        if (typeof(props) !== 'undefined') {
            if (props.hasOwnProperty('style')) {
                Object.getOwnPropertyNames(props.style).forEach((rule) => {
                    result.style[rule] = props.style[rule];
                });
            }
            
            if (props.hasOwnProperty('textContent')) {
                result.appendChild(document.createTextNode(props.textContent));
                return result;
            }
         }

        if (content instanceof Array) {
            content.forEach((element) => {
                if (typeof(element) === 'string') {
                    result.appendChild(document.createTextNode(element));
                }else{
                    result.appendChild(element);  
                }
             });
        }
                
        if (typeof(content) === 'string') {
            result.appendChild(document.createTextNode(content));
        }
        return result;
    },
    render: ( app, root ) => {
        console.log(app, root);
        root.appendChild(app);
    }
}

const app = 
  React.createElement('div', { style: { backgroundColor: 'red' } }, [
    React.createElement('span', undefined, 'Hello world'),
    React.createElement('br'),
    'This is just a text node',
    React.createElement('div', { textContent: 'Text content' }),
  ]);

React.render(
  app,
  document.getElementById('root'),
);
