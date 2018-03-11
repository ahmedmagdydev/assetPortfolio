import React from 'react';

/** The Footer appears at the bottom of every page. Rendered by the App Layout component. */
class SiterFooter extends React.Component {
  render() {
    const footerStyle = { background:'url(/images/footer.png) no-repeat',
                          height:700,
                          backgroundSize:'100%',
                          backgroundPosition:'bottom' };
    return (
        <footer style={footerStyle}>
          
        </footer>
    );
  }
}

export default SiterFooter;
