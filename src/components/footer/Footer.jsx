import React from "react";
import './footer.css'
const Footer = () => {
    return(
        <>
            <footer class="nk-main-footer pb-16 lg:pb-0" style={{marginTop:0}}>
                <div class="nk-footer-container">
                    <div class="nk-top-footer">
                        <div class="nk-footer-one">
                        <div class="space-y-3">
                            <img class="h-40 object-contain" src="https://deificindia.com/namonamah/assets/image/logo/namonamah.png" alt=""/>          
                            <p class="text-sm">Subscribe to our newsletter</p>
                            <form class="pr-5">
                            <div class="relative">
                                <div class="nk-input-icon">
                                <span class="text-gray-600"><i class="far fa-envelope"></i></span>
                                </div>
                                <input type="email" id="footer-email-form" class="nk-input-container p-2.5 pl-10" placeholder="Enter email address ..."/>
                                <button class="btn-subscribe">
                                <i class="fas fa-chevron-right"></i>
                                </button>
                            </div>
                            </form>
                            <p class="nk-footer-agree">
                            By signing for email you agree to our&nbsp;
                            <a class="nk-terms-policy" href="#!">Terms of Conditions</a> and&nbsp;
                            <a class="nk-terms-policy" href="#!">Privacy Policy</a>.
                            </p>
                        </div>
                        {/* <div>
                            <h5 class="nk-title-footer">Social Accounts:</h5>
                            <div class="nk-social-container">
                            <span><a class="nk-hover-link" href="#!"><i class="fab fa-instagram"></i></a></span>
                            <span><a class="nk-hover-link" href="#!"><i class="fab fa-tiktok"></i></a></span>
                            <span><a class="nk-hover-link" href="#!"><i class="fab fa-youtube"></i></a></span>
                            <span><a class="nk-hover-link" href="#!"><i class="fab fa-facebook"></i></a></span>
                            <span><a class="nk-hover-link" href="#!"><i class="fab fa-snapchat"></i></a></span>
                            <span><a class="nk-hover-link" href="#!"><i class="fab fa-pinterest"></i></a></span>
                            </div>
                        </div>
                        <div>
                            <h5 class="nk-title-footer">Secure Payment Gateways:</h5>
                            <div class="mt-1 text-3xl">
                            <span><i class="fab fa-cc-visa p-1"></i></span>
                            <span><i class="fab fa-cc-mastercard p-1"></i></span>
                            <span><i class="fab fa-cc-amex p-1"></i></span>
                            <span><i class="fab fa-cc-discover p-1"></i></span>
                            <span><i class="fab fa-cc-jcb p-1"></i></span>
                            </div>
                        </div> */}
                        </div>
                        <div class="space-y-3">
                        <h5 class="nk-footer-nav-title">Company</h5>
                        <div class="nk-footer-nav-link-div">
                            <div><a class="nk-footer-nav-link" href="#!">About Us</a></div>
                            <div><a class="nk-footer-nav-link" href="#!">Investors</a></div>
                            <div><a class="nk-footer-nav-link" href="#!">News &amp; Press</a></div>
                            <div><a class="nk-footer-nav-link" href="#!">Store Directory</a></div>
                            <div><a class="nk-footer-nav-link" href="#!">Affiliate Program</a></div>
                            <div><a class="nk-footer-nav-link" href="#!">Sell on neytok.com</a></div>
                            <div><a class="nk-footer-nav-link" href="#!">Careers</a></div>
                            <div><a class="nk-footer-nav-link" href="#!">Advertise with us</a></div>
                            <div>
                            <a class="nk-footer-nav-link" href="#!">Developers <span><i class="fas fa-external-link-alt"></i></span></a>
                            </div>
                        </div>
                        </div>
                        <div>
                        <div>
                            <h5 class="nk-footer-nav-title">Account</h5>
                            <div class="nk-footer-nav-link-div">
                            <div><a class="nk-footer-nav-link" href="account-overview.html">Neykart Account</a></div>
                            <div><a class="nk-footer-nav-link" href="account-orders-purchase.html">View Orders</a></div>
                            <div><a class="nk-footer-nav-link" href="track-order.html">Track Order</a></div>
                            <div><a class="nk-footer-nav-link" href="account-offers-deals.html">Offers &amp; Deals</a></div>
                            <div><a class="nk-footer-nav-link" href="account-buy-it-again.html">Buy It Again</a></div>
                            <div><a class="nk-footer-nav-link" href="account-wishlist.html">Wishlist &amp; Saved Items</a></div>
                            <div>
                                <a class="nk-footer-nav-link" href="shop-product.html#recently-viewed-items">Browsing History</a>
                            </div>
                            </div>
                        </div>
                        </div>
                        <div>
                        <div>
                            <h5 class="nk-footer-nav-title">Neykart Card</h5>
                            <div class="nk-footer-nav-link-div">
                            <div><a class="nk-footer-nav-link" href="#!">Apply for a Card</a></div>
                            <div><a class="nk-footer-nav-link" href="#!">Credit Card Offers</a></div>
                            <div><a class="nk-footer-nav-link" href="#!">Neykart Pay</a></div>
                            <div><a class="nk-footer-nav-link" href="#!">Check Requirements</a></div>
                            <div><a class="nk-footer-nav-link" href="#!">Other Services</a></div>
                            </div>
                        </div>
                        </div>
                        <div>
                        <div>
                            <h5 class="nk-footer-nav-title">Help &amp; Support</h5>
                            <div class="nk-footer-nav-link-div">
                            <div><a class="nk-footer-nav-link" href="#!">Help Center</a></div>
                            <div><a class="nk-footer-nav-link" href="#!">Schedule a Service</a></div>
                            <div><a class="nk-footer-nav-link" href="#!">Shipping &amp; Delivery Info</a></div>
                            <div><a class="nk-footer-nav-link" href="#!">Return &amp; Refund Policy</a></div>
                            <div><a class="nk-footer-nav-link" href="#!">Shop with an Expert</a></div>
                            <div><a class="nk-footer-nav-link" href="#!">Contact Us</a></div>
                            <div><a class="nk-footer-nav-link" href="#!">Protection &amp; Support Plans</a></div>
                            <div><a class="nk-footer-nav-link" href="#!">Send us feedback</a></div>
                            </div>
                        </div>
                        </div>
                    </div>
                    <div class="nk-middle-footer mt-4">
                        <div class="nk-app-footer">
                        <h5 class="nk-app-title">Shop faster with our App:</h5>
                        <a class="nk-hover-link" href="#!"><i class="fab fa-google-play fa-2x"></i></a>
                        <a class="nk-hover-link" href="#!"><i class="fab fa-apple fa-2x"></i></a>
                        </div>
                    </div>
                    <div class="nk-border-footer"></div>
                    <div class="nk-bottom-footer">
                        <div>
                            <h5 class="">Copyright &copy; <span id="copyright-year"></span> Namo Namah | All Rights Reserved.</h5>
                        </div>
                        <div class="nk-link-footer">
                            <div><a class="nk-bottom-footer-nav-link" href="#!">Accessibility</a> |</div>
                            <div><a class="nk-bottom-footer-nav-link" href="#!">Privacy Policy</a> |</div>
                            <div><a class="nk-bottom-footer-nav-link" href="#!">Cookie Policy</a> |</div>
                            <div><a class="nk-bottom-footer-nav-link" href="#!">Terms of Service</a> |</div>
                            <div><a class="nk-bottom-footer-nav-link" href="#!">Do Not Sell My Information</a></div>
                        </div>
                    </div>
                </div>
            </footer>
        </>
    );
}
export default Footer;