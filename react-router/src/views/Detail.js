import React from "react";
import MainLayout from "../layouts/MainLayout";
import { Link } from "react-router-dom/cjs/react-router-dom.min";

class Detail extends React.Component {
  state = {
    skills: [
      {
        id: 1,
        name: "Javascript",
        description: "Javascript description",
        image: require("../images/js.png")
      },
      {
        id: 2,
        name: "Vue",
        description: "Vue description",
        image: require("../images/vue.png")
      },
      {
        id: 3,
        name: "React",
        description: "React description",
        image: require("../images/react.png")
      },
      {
        id: 4,
        name: "Svelte",
        description: "Svelte description",
        image: require("../images/sv.png")
      },
    ],
    data: ""
  }

  componentDidMount() {
    // ini ngambil id yang ada di route params :id
    const id = this.props.match.params.id
    const data = this.state.skills.find(item => item.id === parseInt(id))
    this.setState({
      data: data
    })
  }

  render() {
    return (
      <div>
        <MainLayout>
          <div style={{ padding: "0 2rem" }}>
            <h1>{ this.state.data.name }</h1>
            <img style={{width: "200px"}} src={this.state.data.image} alt={this.state.data.name + " image"}></img>
            <p>Commodo irure officia reprehenderit consequat aute qui voluptate cillum ex consequat eu. Officia proident ex ad esse sunt ullamco officia cillum esse ex. Id ullamco esse laboris dolore nisi nisi commodo est ea pariatur magna deserunt reprehenderit esse. Mollit pariatur proident deserunt non fugiat. Non in ea ea laboris non elit ipsum elit. Aliqua dolore ut commodo deserunt anim ex ut quis sit cillum consequat. Irure minim et elit sint amet culpa quis elit ut esse magna.</p>
            <Link to="/">Back home</Link>
          </div>
        </MainLayout>
      </div>
    )
  }
}

export default Detail;