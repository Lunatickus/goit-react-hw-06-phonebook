import { useDispatch } from 'react-redux';
import { StyledFilterLabel } from './Filter.styled';
import { setFilter } from 'redux/filterSlice';

export const Filter = () => {
  const dispatch = useDispatch();

  return (
    <StyledFilterLabel>
      Find contacts by name
      <input
        type="text"
        name="filter"
        title="Find contacts by name"
        onChange={e => dispatch(setFilter(e.target.value))}
      />
    </StyledFilterLabel>
  );
};
