import React from 'react';
import Input from '../common/input/Input';
import Button from '../common/button/Button';
import Dropdown from '../common/dropdown/Dropdown';
import CloseButton from '../closeButton/CloseButton';

const genre = [
  {
    title: 'Documentary',
    id: 'g1',
  },
  {
    title: 'Comedy',
    id: 'g2',
  },
  {
    title: 'Horror',
    id: 'g3',
  },
  {
    title: 'Crime',
    id: 'g4',
  },
];

export default function AddMovie(props) {
  const { handleClose } = props;
  return (
    <>
      <CloseButton handleClose={handleClose}/>
      <form>
        <p className="modal-title">Add Movie</p>
        <Input
          id="movie-title"
          title="Title"
        />
        <Input
          id="movie-release"
          title="Release date"
        />
        <Input
          id="movie-url"
          title="Movie url"
        />
        <div>
          <Dropdown options={genre} />
        </div>
        <Input
          id="movie-overview"
          title="overview"
        />
        <Input
          id="movie-runtime"
          title="runtime"
        />
        <div className="add-movie-buttons">
          <Button
            className="button"
            title="RESET"
            handleClick={() => {}}
          />
          <Button
            className="button"
            title="SUBMIT"
            handleClick={() => {}}
          />
        </div>
      </form>
    </>
  )
}
