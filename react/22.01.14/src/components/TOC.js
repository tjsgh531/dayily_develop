import {Component} from "react";
class TOC extends Component{
    render(){
        console.log('TOC render');
        let lists = [];
        let data = this.props.data;
        for(let i = 0; i < data.length; i++){
            lists.push(
            <li key={data[i].id}>
                <a href={"/content/"+data[i]} onClick={function(e){
                    e.preventDefault();
                    this.props.onChangePage();
                }.bind(this)}>
                    {data[i].title}
                </a>
            </li>)
        }
        return(
            <nav>
                <ul>
                    {lists}
                </ul>
            </nav>
        );
    }
}

export default TOC;