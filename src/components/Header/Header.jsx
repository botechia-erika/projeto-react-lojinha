import {HeaderCtn} from './styledHeader'

const Header = () => {
  return (
    <>
      <HeaderCtn class="border">
        <h1>Header</h1>
        <div>
          <input type="text" />
          <button type="submit">enviar</button>
        </div>
      </HeaderCtn>
    </>
  );
};

export default Header;
