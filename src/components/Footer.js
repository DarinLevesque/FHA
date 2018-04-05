import React from 'react';
import Link, { navigateTo } from 'gatsby-link';

const styles = {
  bmBurgerButton: {
    position: 'fixed',
    width: '36px',
    height: '30px',
    left: '36px',
    top: '36px'
  },
  bmBurgerBars: {
    background: '#373a47'
  },
  bmCrossButton: {
    height: '24px',
    width: '24px'
  },
  bmCross: {
    background: '#bdc3c7'
  },
  bmMenu: {
    background: '#373a47',
    padding: '2.5em 1.5em 0',
    fontSize: '1.15em'
  },
  bmMorphShape: {
    fill: '#373a47'
  },
  bmItemList: {
    color: '#b8b7ad',
    padding: '0.8em'
  },
  bmOverlay: {
    background: 'rgba(0, 0, 0, 0.3)'
  },
  rgbawhitelight: {
    margin: '10% 15% 5%'
  }
}

const Footer = () => (
    <footer styles={ styles } class="page-footer font-small indigo pt-0">
        <div class="container">
            <div class="row pt-5 mb-3 text-center d-flex justify-content-center">
                <div class="col-md-2 mb-3">
                    <h6 class="text-uppercase font-weight-bold">
                        <a href="#!">About us</a>
                    </h6>
                </div>
                <div class="col-md-2 mb-3">
                    <h6 class="text-uppercase font-weight-bold">
                        <a href="#!">Products</a>
                    </h6>
                </div>
                <div class="col-md-2 mb-3">
                    <h6 class="text-uppercase font-weight-bold">
                        <a href="#!">Awards</a>
                    </h6>
                </div>
                <div class="col-md-2 mb-3">
                    <h6 class="text-uppercase font-weight-bold">
                        <a href="#!">Help</a>
                    </h6>
                </div>
                <div class="col-md-2 mb-3">
                    <h6 class="text-uppercase font-weight-bold">
                        <a href="#!">Contact</a>
                    </h6>
                </div>
            </div>
            <hr class="rgbawhitelight" />
            <div class="row d-flex text-center justify-content-center mb-md-0 mb-4">
                <div class="col-md-8 col-12 mt-5">
                    <p>Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium,
                        totam rem aperiam, eaque ipsa quae ab illo inventore veritatis et quasi architecto beatae
                        vitae dicta sunt explicabo. Nemo enim ipsam voluptatem quia voluptas sit aspernatur aut odit
                        aut fugit, sed quia consequuntur.</p>

                </div>
            </div>
            <hr class="clearfix d-md-none rgbawhitelight" />
            <div class="row pb-3">
                <div class="col-md-12">
                    <div class="mb-5 flex-center">
                        <a class="fb-ic">
                            <i class="fa fa-facebook fa-lg white-text mr-md-4"> </i>
                        </a>
                        <a class="tw-ic">
                            <i class="fa fa-twitter fa-lg white-text mr-md-4"> </i>
                        </a>
                        <a class="gplus-ic">
                            <i class="fa fa-google-plus fa-lg white-text mr-md-4"> </i>
                        </a>
                        <a class="li-ic">
                            <i class="fa fa-linkedin fa-lg white-text mr-md-4"> </i>
                        </a>
                        <a class="ins-ic">
                            <i class="fa fa-instagram fa-lg white-text mr-md-4"> </i>
                        </a>
                        <a class="pin-ic">
                            <i class="fa fa-pinterest fa-lg white-text"> </i>
                        </a>
                    </div>
                </div>
            </div>
        </div>
        <div class="footer-copyright py-3 text-center">
            © 2018 Copyright:
            <a href="https://fairhousingact.org"> Fair Housing Advocates, Inc. </a>
        </div>
    </footer>
)



export default Footer
