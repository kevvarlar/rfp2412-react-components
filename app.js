// TODO
const { useState } = React;

const GroceryListItem = ({groceryItem}) => {

  const [isHovering, setIsHovering] = useState(false);

  const handleMouseEnter = () => {
    setIsHovering(true);
  };

  const handleMouseLeave = () => {
    setIsHovering(false);
  };

  const style = {
    fontWeight: isHovering ? 'bold' : 'normal',
  };

  return (
    <li style={style} onMouseEnter = {handleMouseEnter} onMouseLeave = {handleMouseLeave}>
      {groceryItem}
    </li>
  );
};

const GroceryList = ({groceryItems}) => (
  <ul>
    {groceryItems.map((groceryItem) => <GroceryListItem groceryItem = {groceryItem} />)}
  </ul>
);

const App = () => (
  <div>
    <h2>My Grocery List</h2>
    <GroceryList groceryItems={['eggs', 'milk', 'coffee']}/>
  </div>
);


ReactDOM.render(<App />, document.getElementById('app'));