import React from "react";
import styled from "styled-components";
import axios from "axios";
// import PropTypes from "prop-types";

// add functionality to change image on click/hover
const ListContainer = styled.div `
  float: left;
`

class ImageList extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      images: [],
      currentImage: this.props.image
    }
  }

  getTitleNoun() {
    setTimeout(() => {console.log('!!!!!', this.props.title.split(' ')[1])}, 2000);
    // return (this.props.title ? this.props.title.split(' ')[1] : null)
    // setTimeout(() => {console.log('words:', words)}, 2000);
    // return words[1];
    // return setTimeout(() => this.props.title.split(' ')[1], 2000);
    setTimeout(() => { return this.props.title.split(' ')[1]}, 2000);
  }

  findRelatedImages() {
    let noun = this.getTitleNoun();
    setTimeout(() => { console.log('noun:', noun)}, 2500);
    // axios.get('http://localhost:3003/images', {
    //   params: {
    //     title: noun // contains second word in title
    //   }
    // })
    // .then((response) => {
    //   console.log('image response on client side:', response);
    //   // this.setState({
    //   //   images: response.data[0]
    //   // })
    // })
    // .catch((err) => {
    //   console.log('err getting images on client side:', err)
    // })
  }

  switchImage(newImage) {
    this.setState({
      currentImage: newImage
    })
  }

  componentDidMount() {
    this.findRelatedImages();
  }

  render() {
    return (
      <ListContainer>
        <div>
          <img src={this.props.image} style={{height: 50 + 'px'}}></img><br></br>
          <img src={this.props.image} style={{height: 50 + 'px'}}></img>
        </div>
      </ListContainer>
    )
  }
}

export default ImageList;

// const ImageList = (props) => {
//   return ( 
//   <ListContainer>
//     <div>
//       <img src={props.image} style={{height: 50 + 'px'}}></img><br></br>
//       <img src={props.image} style={{height: 50 + 'px'}}></img>
//     </div>
//   </ListContainer>
//   )
// };

// export default ImageList;



// const Input = ({ label, text, type, id, value, handleChange }) => (
//   <div className="form-group">
//     <label htmlFor={label}>{text}</label>
//     <input
//       type={type}
//       className="form-control"
//       id={id}
//       value={value}
//       onChange={handleChange}
//       required
//     />
//   </div>
// );
// Input.propTypes = {
//   label: PropTypes.string.isRequired,
//   text: PropTypes.string.isRequired,
//   type: PropTypes.string.isRequired,
//   id: PropTypes.string.isRequired,
//   value: PropTypes.string.isRequired,
//   handleChange: PropTypes.func.isRequired
// };
// export default Input;