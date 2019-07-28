import React,{Component} from 'react';
import './App.css';
import Header from './components/Header'


class App extends Component {
  state={
    siteTitle:'This is site title',
    informations:[
      {
        id:1,
        name:'Bangali',
        description:'Upword Top Rated'
      },
      {
        id:2,
        name:'Bayzid',
        description:'Graphics designer'
      },
      {
        id:3,
        name:'Sajidul Islam',
        description:'UpwordBegginer'
      }
    ]
  }
    render() {
        return (
          <div>
          <Header/>
           <h1>Form the header</h1>
           <h2>{this.state.siteTitle}</h2>

            {
              this.state.informations.map((information) =>(
              <li>ID: {information.id}<br/>Name: {information.name}<br/>Description: {information.description}<br/></li>

              ))
            }
           </div>
        )
    }
}


export default App;