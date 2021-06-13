class Item extends React.Component{
    render(){
        return (<li>{this.props.children}</li>);
    } 
 }
 class List extends React.Component {
 
    constructor(props) {
        super(props);
        this.props = props;
        this.state = { items: [] };
        this.add = this.add.bind(this);
       this.eachItem = this.eachItem.bind(this);
        this.myRef = React.createRef();
    }
 
    add(){
        var newItem = this.myRef.current.value;
        this.myRef.current.value = '';
        var arr = this.state.items;
        arr.push(newItem);
        this.setState({items:arr});  
    }
 
    eachItem(item, i){
        return (
            <Item index={i}>{item}</Item>
          );
    }
 
 
    render() {
       return (
       <div className="container">
        <p>{this.props.children}</p>
        <input ref={this.myRef} type="text"></input>
         <button onClick={this.add} className="btn btn-success">Add</button>
            <ol>
                 { this.state.items.map(this.eachItem) }
            </ol>

       </div>

       );
    }
 }
 ReactDOM.render(<List>Grocery List</List>, document.getElementById('react-container'));
 