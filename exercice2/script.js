



const Pet = (props) => {
	return React.createElement('div',{},[
        React.createElement('h1',{},props.name),
        React.createElement('h2',{},props.animal),
        React.createElement('h2',{},props.breed)
    ]);

};

const App = () => {
    return React.createElement('div',{},[
React.createElement(Pet, {name: 'Luna', animal: 'Dog', breed: 'Havanese'}, null),
React.createElement(Pet,{name:'Mounir', animal:'Dog', breed:'Husky'},null),
    ]) 
};

const container = document.getElementById('root');
const root = ReactDOM.createRoot(container);
root.render(React.createElement(App));
