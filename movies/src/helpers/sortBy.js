const sortBy = (sortType) => (a, b) => {
  let bandA;
  let bandB;
  if(sortType === 'title') {
    bandA = a.title.toUpperCase();
    bandB = b.title.toUpperCase();
  }

  if(sortType === 'release_date') {
    bandA = a['release_date'];
    bandB = b['release_date'];
  }

  if(sortType === 'rating') {
    bandA = a['vote_average'];
    bandB = b['vote_average'];
  }

  let comparison = 0;
  if (bandA > bandB) {
    comparison = 1;
  } else if (bandA < bandB) {
    comparison = -1;
  }
  return comparison;
};

export default sortBy;
