import { Component } from "react";
import { connect } from "react-redux";
import { bindActionCreators } from "redux";

import {
  getAllCharacters,
  filterStudents,
  filterStaff,
} from "../../actions/characters";

class ClassButton extends Component {
  onCreate() {
    this.props.filterStudents();
    this.props.filterStaff();
  }
  onStudent() {
    if (this.activeStudents) return this.props.getAllCharacters();
    this.props.filterStudents();
  }

  onFilter() {
    if (this.activeStaff) return this.props.getAllCharacters();
    this.props.filterStaff();
  }

  render() {
    return (
      <>
        <button
          onClick={() => this.onStudent()}
          className={
            this.activeStudents ? "button buttonActive" : "button"
          }
        >
          <p>Estudiantes</p>
        </button>

        <button
          onClick={() => this.onFilter()}
          className={this.activeStaff ? "button buttonActive" : "button"}
        >
          <p>Staff</p>
        </button>
      </>
    );
  }
}

const mapStateToProps = (state) => {
  return {
    activeStudents: state.characters.characters,
    activeStaff: state.characters.characters,
  };
};

const mapDispatchToProps = (dispatch) => {
  return bindActionCreators(
    { getAllCharacters, filterStudents, filterStaff },
    dispatch
  );
};

export default connect(mapStateToProps, mapDispatchToProps)(ClassButton);
