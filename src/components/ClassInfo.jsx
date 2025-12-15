import PropTypes from 'prop-types';

const ClassInfo = (props) => {
    return (
        <section>
            <h2 >Class List</h2>
            <ul >
                <li>Name: Team Semicolons</li>
                <li>Number of members:{props.number}</li>
            </ul>
        </section>
    );
};
ClassInfo.propTypes={
  number:PropTypes.number.isRequired,
  
};
export default ClassInfo;