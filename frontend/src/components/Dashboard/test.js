class App extends React.Component {
  constructor(){
    super();
    this.state = {      
      data: data, // array from the bottom of this script
      orderBy: "first_name",
      order: "asc",
      dropdownActive: true
    };
    this.doOrderBy = this.doOrderBy.bind(this);
    this.doOrder = this.doOrder.bind(this);
    this.toggle = this.toggle.bind(this);
  }
  toggle(e){
    e.preventDefault();
    let isActive = this.state.dropdownActive;
    isActive = !isActive;
    this.setState({dropdownActive: isActive});
  }
  doOrderBy(e){
    e.preventDefault();
    const newOrderBy = e.target.getAttribute('data-value');
    this.setState({orderBy : newOrderBy});
  }
  doOrder(e){
    e.preventDefault();
    const newOrder = e.target.getAttribute('data-value');
    this.setState({order : newOrder});
  }
  render() {    
    const orderBy = this.state.orderBy;
    const order = this.state.order;
    let sorted = this.state.data;
    
    sorted = _.orderBy(sorted, (item) => {
      return item[orderBy]
    }, order);     
    
    const items = sorted.map((item)=>{
      return <Person data={ item } key={ item.id } orderBy={ this.state.orderBy } />
    }); 
    
    return (
      <div className="container">
        <div className="row">
          <div className="col-sm-8 col-sm-offset-2">
            <h1 className="text-center">React - sortable list</h1>
            <div className="clearfix">
              <Dropdown toggle={ this.toggle } 
                dropdownActive={ this.state.dropdownActive } 
                doOrderBy={ this.doOrderBy }
                doOrder={ this.doOrder }
                orderBy={ this.state.orderBy }
                order={ this.state.order } />
            </div>
            { items } 
            <p className="text-center author">Made with ♥ by <a href="https://dankoknad.github.io/" target="_blank">Danko</a></p>
          </div>          
        </div>                
      </div>
    )
  }
}

class Dropdown extends React.Component {    
  render() { 
    
    const { dropdownActive, toggle, orderBy, order, doOrderBy, doOrder } = this.props;
    const checked = <span className="glyphicon glyphicon-ok"></span>;
    const input = names; // array from the bottom of this script
    const output = names.map((item)=>{
        return <li><a href="#" onClick={ doOrderBy }  data-value={ item[0]}>{item[1] } { orderBy === item[0] ? checked : null }</a></li>
    });      
          
    return (
      <div className={ dropdownActive ? "dropdown  pull-right open" : "dropdown pull-right " }>
        <a className="btn btn-info" onClick={ toggle } href="#">
          Sort items by
          <span className="caret"></span>
        </a>
        <ul className="dropdown-menu">
          { output }
          <li className="divider"></li>
          <li><a href="#" onClick={ doOrder } data-value="asc">ascendind { order === "asc" ? checked : null }</a></li>
          <li><a href="#" onClick={ doOrder } data-value="desc">descending { order === "desc" ? checked : null }</a></li>
        </ul>
      </div>  
    )   
  }
}

class Person extends React.Component {
  render(){
    const { data, orderBy } = this.props;
    const input = categories; // array from the bottom of this script
    const output = input.map((item)=>{
      return <div><small className={ orderBy === item ? "active" : null }>{item}:</small> {data[item] }</div>
    });
    return (    
      <div className="media">
        <div className="media-left">
          <img className="media-object" src={ data.img } alt={`${data.first_name} ${data.last_name}` } /> 
        </div>
        <div className="media-body">
          <h4 className="media-heading">
            <span className={ orderBy === "first_name" ? "active" : null }>{ data.first_name } </span> 
            <span className={ orderBy === "last_name" ? "active" : null }>{ data.last_name }</span>
          </h4>      
          <div><small>about:</small> { data.about }</div>
          {output}
          <div><small>email:</small> <a href={ data.email }> { data.email } </a></div>
        </div>
      </div>     
    )
  }
}
const names = [["first_name", "first name"],["last_name", "last name"],["company","company"],["job","job"],["city","city"],["gender","gender"]]
const categories = ["company","job","city","gender"]
const data = [{"id":1,"first_name":"Robin","last_name":"Wheeler","email":"rwheeler0@wsj.com","gender":"Female","about":"Suspendisse potenti nullam porttitor lacus at turpis donec posuere metus vitae ipsum aliquam non mauris morbi non lectus","img":"https://randomuser.me/api/portraits/women/1.jpg","city":"Humen","job":"Junior Executive","company":"Babbleopia"},
{"id":2,"first_name":"Kathy","last_name":"Berry","email":"kberry1@ameblo.jp","gender":"Female","about":"Dapibus dolor vel est donec odio justo sollicitudin ut suscipit a feugiat et eros vestibulum ac est lacinia nisi venenatis","img":"https://randomuser.me/api/portraits/women/2.jpg","city":"Babakanbungur","job":"Compensation Analyst","company":"Thoughtstorm"},
{"id":3,"first_name":"Nicholas","last_name":"Armstrong","email":"narmstrong2@blog.com","gender":"Male","about":"Sapien dignissim vestibulum vestibulum ante ipsum primis in faucibus orci luctus et","img":"https://randomuser.me/api/portraits/men/2.jpg","city":"Mopti","job":"Account Executive","company":"Thoughtsphere"},
{"id":4,"first_name":"Wanda","last_name":"Morris","email":"wmorris3@spiegel.de","gender":"Female","about":"A nibh in quis justo maecenas rhoncus aliquam lacus morbi quis tortor id nulla ultrices aliquet maecenas leo odio","img":"https://randomuser.me/api/portraits/women/3.jpg","city":"Peñarrubia","job":"Sales Associate","company":"Jabbersphere"},
{"id":5,"first_name":"Mary","last_name":"Griffin","email":"mgriffin4@flickr.com","gender":"Female","about":"Congue vivamus metus arcu adipiscing molestie hendrerit at vulputate vitae nisl aenean","img":"https://randomuser.me/api/portraits/women/4.jpg","city":"Opuwo","job":"Staff Accountant I","company":"Digitube"},
{"id":6,"first_name":"Paul","last_name":"Gomez","email":"pgomez5@wunderground.com","gender":"Male","about":"Nam congue risus semper porta volutpat quam pede lobortis ligula sit amet eleifend","img":"https://randomuser.me/api/portraits/men/3.jpg","city":"Dumalneg","job":"Software Consultant","company":"Devpoint"},
{"id":7,"first_name":"Carlos","last_name":"Hayes","email":"chayes6@about.me","gender":"Male","about":"Vestibulum sit amet cursus id turpis integer aliquet massa id lobortis","img":"https://randomuser.me/api/portraits/men/4.jpg","city":"Caparrapí","job":"Staff Scientist","company":"Yacero"},
{"id":8,"first_name":"Paula","last_name":"Coleman","email":"pcoleman7@hatena.ne.jp","gender":"Female","about":"Est risus auctor sed tristique in tempus sit amet sem fusce consequat","img":"https://randomuser.me/api/portraits/women/5.jpg","city":"Asan-Maina Village","job":"Structural Engineer","company":"Rhycero"},
{"id":9,"first_name":"Teresa","last_name":"Vasquez","email":"tvasquez8@phpbb.com","gender":"Female","about":"Diam neque vestibulum eget vulputate ut ultrices vel augue vestibulum ante","img":"https://randomuser.me/api/portraits/women/6.jpg","city":"Khombole","job":"VP Marketing","company":"Realpoint"},
{"id":10,"first_name":"Alice","last_name":"Campbell","email":"acampbell9@multiply.com","gender":"Female","about":"Pede justo lacinia eget tincidunt eget tempus vel pede morbi porttitor lorem id ligula suspendisse","img":"https://randomuser.me/api/portraits/women/7.jpg","city":"Cagliari","job":"Internal Auditor","company":"Yoveo"}];

ReactDOM.render(<App/>, document.getElementById("app"))