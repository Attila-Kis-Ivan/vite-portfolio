import {
  FooterContainer,
  FooterItemContainer,
  FooterCopyright,
} from "./Footer.styles";

const FooterBar = () => {
  let date = new Date();
  let year = date.getFullYear();
  return (
    <FooterContainer>
      <FooterItemContainer>
        <FooterCopyright>
          <h1 className="footer-copyright-text">
            Developed and Designed by Attila Kis-Ivan
          </h1>
        </FooterCopyright>
        <FooterCopyright>
          <h1>Copyright &copy; {year} TDB</h1>
        </FooterCopyright>
      </FooterItemContainer>
    </FooterContainer>
  );
};

export default FooterBar;
