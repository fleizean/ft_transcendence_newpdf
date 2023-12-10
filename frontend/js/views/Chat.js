import AbstractView from "./AbstractView.js";

export default class extends AbstractView {
    constructor(params) {
        super(params);
        this.setTitle("Chat");
    }

    async getHtml() {
        return `
        <nav class="navbar">
        <div class="logo-container"><a href="/dashboard" data-link>
          <div class="logo">
            <img src="../../assets/logo.png" alt="IndianPong Logo" width="48" height="48">
            IndianPong
          </div></a>
      </div>
        <ul class="nav-links">
          <li><a href="/dashboard" data-link><i class="bi bi-house-door-fill"></i>Dashboard</a></li>
          <li><a href="/game" data-link><i class="bi bi-play-circle-fill"></i>Game</a></li>
          <li><a href="/chat" data-link><i class="bi bi-chat-fill"></i>Chat</a></li>
          <li><a href="/friends" data-link><i class="bi bi-heart-fill"></i>Friends</a></li>
          <li><a href="/search" data-link><i class="bi bi-binoculars-fill"></i>Search</a></li>
          <li><a href="/profile" data-link><i class="bi bi-person-fill"></i>Profile</a></li>
        </ul>
        <div class="burger-menu">&#9776;</div>
      </nav>

      <div class="container-top">
    <div class="card">
    <section class="chat-section">
    <div class="chat-container">
        <!-- start: Sidebar -->
        <aside class="chat-sidebar">
            <a href="#" class="chat-sidebar-logo">
                <i class="bi bi-discord"></i>
            </a>
            <ul class="chat-sidebar-menu">
                <li class="active"><a href="#" data-title="DM"><i class="bi bi-chat-square-fill"></i></a></li>
                <li><a href="#" data-title="Room"><i class="bi bi-chat-square-quote-fill"></i></a></li>
                <li><a href="#" data-title="Settings"><i class="bi bi-gear-fill"></i></a></li>
                <li class="chat-sidebar-profile">
                    <button type="button" class="chat-sidebar-profile-toggle">
                        <i class="bi bi-person-circle" style="font-size: 24px; color: #059669;"></i>
                    </button>
                    <ul class="chat-sidebar-profile-dropdown">
                        <li><a href="#"><i class="bi bi-person-fill"></i> Profile</a></li>
                        <li><a href="#"><i class="bi bi-box-arrow-left"></i> Logout</a></li>
                    </ul>
                </li>
            </ul>
        </aside>
        <!-- end: Sidebar -->
        <!-- start: Content -->
        <div class="chat-content">
            <!-- start: Content side -->
            <div class="content-sidebar">
                <div class="content-sidebar-title">Chats</div>
                <form action="" class="content-sidebar-form">
                    <input type="search" class="content-sidebar-input" placeholder="Search...">
                    <button type="submit" class="content-sidebar-submit"><i class="bi bi-search"></i></button>
                </form>
                <div class="content-messages">
                    <ul class="content-messages-list">
                        <li class="content-message-title"><span>Recently</span></li>
                        <li>
                            <a href="#" data-conversation="#conversation-1">
                                <img class="content-message-image" src="https://images.unsplash.com/photo-1534528741775-53994a69daeb?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8OXx8cGVvcGxlfGVufDB8fDB8fHww&auto=format&fit=crop&w=500&q=60" alt="">
                                <span class="content-message-info">
                                    <span class="content-message-name">Someone</span>
                                    <span class="content-message-text">Lorem ipsum dolor sit amet consectetur.</span>
                                </span>
                                <span class="content-message-more">
                                    <span class="content-message-unread">5</span>
                                    <span class="content-message-time">12:30</span>
                                </span>
                            </a>
                        </li>
                        <li>
                            <a href="#" data-conversation="#conversation-2">
                                <img class="content-message-image" src="https://images.unsplash.com/photo-1534528741775-53994a69daeb?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8OXx8cGVvcGxlfGVufDB8fDB8fHww&auto=format&fit=crop&w=500&q=60" alt="">
                                <span class="content-message-info">
                                    <span class="content-message-name">Someone</span>
                                    <span class="content-message-text">Lorem ipsum dolor sit amet consectetur.</span>
                                </span>
                                <span class="content-message-more">
                                    <span class="content-message-time">12:30</span>
                                </span>
                            </a>
                        </li>
                        <li>
                            <a href="#">
                                <img class="content-message-image" src="https://images.unsplash.com/photo-1534528741775-53994a69daeb?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8OXx8cGVvcGxlfGVufDB8fDB8fHww&auto=format&fit=crop&w=500&q=60" alt="">
                                <span class="content-message-info">
                                    <span class="content-message-name">Someone</span>
                                    <span class="content-message-text">Lorem ipsum dolor sit amet consectetur.</span>
                                </span>
                                <span class="content-message-more">
                                    <span class="content-message-unread">5</span>
                                    <span class="content-message-time">12:30</span>
                                </span>
                            </a>
                        </li>
                        <li>
                            <a href="#">
                                <img class="content-message-image" src="https://images.unsplash.com/photo-1534528741775-53994a69daeb?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8OXx8cGVvcGxlfGVufDB8fDB8fHww&auto=format&fit=crop&w=500&q=60" alt="">
                                <span class="content-message-info">
                                    <span class="content-message-name">Someone</span>
                                    <span class="content-message-text">Lorem ipsum dolor sit amet consectetur.</span>
                                </span>
                                <span class="content-message-more">
                                    <span class="content-message-time">12:30</span>
                                </span>
                            </a>
                        </li>
                        <li>
                            <a href="#">
                                <img class="content-message-image" src="https://images.unsplash.com/photo-1534528741775-53994a69daeb?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8OXx8cGVvcGxlfGVufDB8fDB8fHww&auto=format&fit=crop&w=500&q=60" alt="">
                                <span class="content-message-info">
                                    <span class="content-message-name">Someone</span>
                                    <span class="content-message-text">Lorem ipsum dolor sit amet consectetur.</span>
                                </span>
                                <span class="content-message-more">
                                    <span class="content-message-unread">5</span>
                                    <span class="content-message-time">12:30</span>
                                </span>
                            </a>
                        </li>
                        <li>
                            <a href="#">
                                <img class="content-message-image" src="https://images.unsplash.com/photo-1534528741775-53994a69daeb?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8OXx8cGVvcGxlfGVufDB8fDB8fHww&auto=format&fit=crop&w=500&q=60" alt="">
                                <span class="content-message-info">
                                    <span class="content-message-name">Someone</span>
                                    <span class="content-message-text">Lorem ipsum dolor sit amet consectetur.</span>
                                </span>
                                <span class="content-message-more">
                                    <span class="content-message-time">12:30</span>
                                </span>
                            </a>
                        </li>
                    </ul>
                    <ul class="content-messages-list">
                        <li class="content-message-title"><span>Recently</span></li>
                        <li>
                            <a href="#">
                                <img class="content-message-image" src="https://images.unsplash.com/photo-1534528741775-53994a69daeb?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8OXx8cGVvcGxlfGVufDB8fDB8fHww&auto=format&fit=crop&w=500&q=60" alt="">
                                <span class="content-message-info">
                                    <span class="content-message-name">Someone</span>
                                    <span class="content-message-text">Lorem ipsum dolor sit amet consectetur.</span>
                                </span>
                                <span class="content-message-more">
                                    <span class="content-message-unread">5</span>
                                    <span class="content-message-time">12:30</span>
                                </span>
                            </a>
                        </li>
                        <li>
                            <a href="#">
                                <img class="content-message-image" src="https://images.unsplash.com/photo-1534528741775-53994a69daeb?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8OXx8cGVvcGxlfGVufDB8fDB8fHww&auto=format&fit=crop&w=500&q=60" alt="">
                                <span class="content-message-info">
                                    <span class="content-message-name">Someone</span>
                                    <span class="content-message-text">Lorem ipsum dolor sit amet consectetur.</span>
                                </span>
                                <span class="content-message-more">
                                    <span class="content-message-time">12:30</span>
                                </span>
                            </a>
                        </li>
                        <li>
                            <a href="#">
                                <img class="content-message-image" src="https://images.unsplash.com/photo-1534528741775-53994a69daeb?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8OXx8cGVvcGxlfGVufDB8fDB8fHww&auto=format&fit=crop&w=500&q=60" alt="">
                                <span class="content-message-info">
                                    <span class="content-message-name">Someone</span>
                                    <span class="content-message-text">Lorem ipsum dolor sit amet consectetur.</span>
                                </span>
                                <span class="content-message-more">
                                    <span class="content-message-unread">5</span>
                                    <span class="content-message-time">12:30</span>
                                </span>
                            </a>
                        </li>
                        <li>
                            <a href="#">
                                <img class="content-message-image" src="https://images.unsplash.com/photo-1534528741775-53994a69daeb?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8OXx8cGVvcGxlfGVufDB8fDB8fHww&auto=format&fit=crop&w=500&q=60" alt="">
                                <span class="content-message-info">
                                    <span class="content-message-name">Someone</span>
                                    <span class="content-message-text">Lorem ipsum dolor sit amet consectetur.</span>
                                </span>
                                <span class="content-message-more">
                                    <span class="content-message-time">12:30</span>
                                </span>
                            </a>
                        </li>
                        <li>
                            <a href="#">
                                <img class="content-message-image" src="https://images.unsplash.com/photo-1534528741775-53994a69daeb?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8OXx8cGVvcGxlfGVufDB8fDB8fHww&auto=format&fit=crop&w=500&q=60" alt="">
                                <span class="content-message-info">
                                    <span class="content-message-name">Someone</span>
                                    <span class="content-message-text">Lorem ipsum dolor sit amet consectetur.</span>
                                </span>
                                <span class="content-message-more">
                                    <span class="content-message-unread">5</span>
                                    <span class="content-message-time">12:30</span>
                                </span>
                            </a>
                        </li>
                        <li>
                            <a href="#">
                                <img class="content-message-image" src="https://images.unsplash.com/photo-1534528741775-53994a69daeb?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8OXx8cGVvcGxlfGVufDB8fDB8fHww&auto=format&fit=crop&w=500&q=60" alt="">
                                <span class="content-message-info">
                                    <span class="content-message-name">Someone</span>
                                    <span class="content-message-text">Lorem ipsum dolor sit amet consectetur.</span>
                                </span>
                                <span class="content-message-more">
                                    <span class="content-message-time">12:30</span>
                                </span>
                            </a>
                        </li>
                    </ul>
                </div>
            </div>
            <!-- end: Content side -->
            <!-- start: Conversation -->
            <div class="conversation conversation-default active">
                <i class="bi bi-chat-square"></i>
                <p>Select chat and view conversation!</p>
            </div>
            <div class="conversation" id="conversation-1">
                <div class="conversation-top">
                    <button type="button" class="conversation-back"><i class="ri-arrow-left-line"></i></button>
                    <div class="conversation-user">
                        <img class="conversation-user-image" src="https://images.unsplash.com/photo-1534528741775-53994a69daeb?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8OXx8cGVvcGxlfGVufDB8fDB8fHww&auto=format&fit=crop&w=500&q=60" alt="">
                        <div>
                            <div class="conversation-user-name">Someone</div>
                            <div class="conversation-user-status online">online</div>
                        </div>
                    </div>
                    <div class="conversation-buttons">
                        <button type="button"><i class="ri-phone-fill"></i></button>
                        <button type="button"><i class="ri-vidicon-line"></i></button>
                        <button type="button"><i class="ri-information-line"></i></button>
                    </div>
                </div>
                <div class="conversation-main">
                    <ul class="conversation-wrapper">
                        <div class="coversation-divider"><span>Today</span></div>
                        <li class="conversation-item me">
                            <div class="conversation-item-side">
                                <img class="conversation-item-image" src="https://images.unsplash.com/photo-1534528741775-53994a69daeb?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8OXx8cGVvcGxlfGVufDB8fDB8fHww&auto=format&fit=crop&w=500&q=60" alt="">
                            </div>
                            <div class="conversation-item-content">
                                <div class="conversation-item-wrapper">
                                    <div class="conversation-item-box">
                                        <div class="conversation-item-text">
                                            <p>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Amet natus repudiandae quisquam sequi nobis suscipit consequatur rerum alias odio repellat!</p>
                                            <div class="conversation-item-time">12:30</div>
                                        </div>
                                        <div class="conversation-item-dropdown">
                                            <button type="button" class="conversation-item-dropdown-toggle"><i class="ri-more-2-line"></i></button>
                                            <ul class="conversation-item-dropdown-list">
                                                <li><a href="#"><i class="ri-share-forward-line"></i> Forward</a></li>
                                                <li><a href="#"><i class="ri-delete-bin-line"></i> Delete</a></li>
                                            </ul>
                                        </div>
                                    </div>
                                </div>
                                <div class="conversation-item-wrapper">
                                    <div class="conversation-item-box">
                                        <div class="conversation-item-text">
                                            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Eaque, tenetur!</p>
                                            <div class="conversation-item-time">12:30</div>
                                        </div>
                                        <div class="conversation-item-dropdown">
                                            <button type="button" class="conversation-item-dropdown-toggle"><i class="ri-more-2-line"></i></button>
                                            <ul class="conversation-item-dropdown-list">
                                                <li><a href="#"><i class="ri-share-forward-line"></i> Forward</a></li>
                                                <li><a href="#"><i class="ri-delete-bin-line"></i> Delete</a></li>
                                            </ul>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </li>
                        <li class="conversation-item">
                            <div class="conversation-item-side">
                                <img class="conversation-item-image" src="https://images.unsplash.com/photo-1534528741775-53994a69daeb?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8OXx8cGVvcGxlfGVufDB8fDB8fHww&auto=format&fit=crop&w=500&q=60" alt="">
                            </div>
                            <div class="conversation-item-content">
                                <div class="conversation-item-wrapper">
                                    <div class="conversation-item-box">
                                        <div class="conversation-item-text">
                                            <p>Lorem, ipsum dolor sit amet consectetur adipisicing elit.</p>
                                            <div class="conversation-item-time">12:30</div>
                                        </div>
                                        <div class="conversation-item-dropdown">
                                            <button type="button" class="conversation-item-dropdown-toggle"><i class="ri-more-2-line"></i></button>
                                            <ul class="conversation-item-dropdown-list">
                                                <li><a href="#"><i class="ri-share-forward-line"></i> Forward</a></li>
                                                <li><a href="#"><i class="ri-delete-bin-line"></i> Delete</a></li>
                                            </ul>
                                        </div>
                                    </div>
                                </div>
                                <div class="conversation-item-wrapper">
                                    <div class="conversation-item-box">
                                        <div class="conversation-item-text">
                                            <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Atque eos ab in?</p>
                                            <div class="conversation-item-time">12:30</div>
                                        </div>
                                        <div class="conversation-item-dropdown">
                                            <button type="button" class="conversation-item-dropdown-toggle"><i class="ri-more-2-line"></i></button>
                                            <ul class="conversation-item-dropdown-list">
                                                <li><a href="#"><i class="ri-share-forward-line"></i> Forward</a></li>
                                                <li><a href="#"><i class="ri-delete-bin-line"></i> Delete</a></li>
                                            </ul>
                                        </div>
                                    </div>
                                </div>
                                <div class="conversation-item-wrapper">
                                    <div class="conversation-item-box">
                                        <div class="conversation-item-text">
                                            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Sint, debitis. Iste natus est aliquam ipsum doloremque fugiat, quidem eos autem? Dolor quisquam laboriosam enim cum laborum suscipit perferendis adipisci praesentium.</p>
                                            <div class="conversation-item-time">12:30</div>
                                        </div>
                                        <div class="conversation-item-dropdown">
                                            <button type="button" class="conversation-item-dropdown-toggle"><i class="ri-more-2-line"></i></button>
                                            <ul class="conversation-item-dropdown-list">
                                                <li><a href="#"><i class="ri-share-forward-line"></i> Forward</a></li>
                                                <li><a href="#"><i class="ri-delete-bin-line"></i> Delete</a></li>
                                            </ul>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </li>
                        <li class="conversation-item me">
                            <div class="conversation-item-side">
                                <img class="conversation-item-image" src="https://images.unsplash.com/photo-1534528741775-53994a69daeb?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8OXx8cGVvcGxlfGVufDB8fDB8fHww&auto=format&fit=crop&w=500&q=60" alt="">
                            </div>
                            <div class="conversation-item-content">
                                <div class="conversation-item-wrapper">
                                    <div class="conversation-item-box">
                                        <div class="conversation-item-text">
                                            <p>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Quas, eos, magni temporibus, placeat consectetur nobis incidunt dicta a culpa vel esse. Facilis fugiat possimus eveniet accusamus dignissimos pariatur inventore animi rem vero, eligendi obcaecati fugit quaerat? Officia ex quod eaque maxime ipsam, tempore error laboriosam laborum, magnam ipsum doloremque quas.</p>
                                            <div class="conversation-item-time">12:30</div>
                                        </div>
                                        <div class="conversation-item-dropdown">
                                            <button type="button" class="conversation-item-dropdown-toggle"><i class="ri-more-2-line"></i></button>
                                            <ul class="conversation-item-dropdown-list">
                                                <li><a href="#"><i class="ri-share-forward-line"></i> Forward</a></li>
                                                <li><a href="#"><i class="ri-delete-bin-line"></i> Delete</a></li>
                                            </ul>
                                        </div>
                                    </div>
                                </div>
                                <div class="conversation-item-wrapper">
                                    <div class="conversation-item-box">
                                        <div class="conversation-item-text">
                                            <p>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Temporibus debitis odio maiores perferendis ipsa repudiandae amet blanditiis quod. Ullam, dolorum.</p>
                                            <div class="conversation-item-time">12:30</div>
                                        </div>
                                        <div class="conversation-item-dropdown">
                                            <button type="button" class="conversation-item-dropdown-toggle"><i class="ri-more-2-line"></i></button>
                                            <ul class="conversation-item-dropdown-list">
                                                <li><a href="#"><i class="ri-share-forward-line"></i> Forward</a></li>
                                                <li><a href="#"><i class="ri-delete-bin-line"></i> Delete</a></li>
                                            </ul>
                                        </div>
                                    </div>
                                </div>
                                <div class="conversation-item-wrapper">
                                    <div class="conversation-item-box">
                                        <div class="conversation-item-text">
                                            <p>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Accusantium blanditiis ea, voluptatum, eveniet at harum minima maxime enim aut non, iure expedita excepturi tempore nostrum quasi natus voluptas dolore ducimus!</p>
                                            <div class="conversation-item-time">12:30</div>
                                        </div>
                                        <div class="conversation-item-dropdown">
                                            <button type="button" class="conversation-item-dropdown-toggle"><i class="ri-more-2-line"></i></button>
                                            <ul class="conversation-item-dropdown-list">
                                                <li><a href="#"><i class="ri-share-forward-line"></i> Forward</a></li>
                                                <li><a href="#"><i class="ri-delete-bin-line"></i> Delete</a></li>
                                            </ul>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </li>
                    </ul>
                </div>
                <div class="conversation-form">
                    <button type="button" class="conversation-form-button"><i class="ri-emotion-line"></i></button>
                    <div class="conversation-form-group">
                        <textarea class="conversation-form-input" rows="1" placeholder="Type here..."></textarea>
                        <button type="button" class="conversation-form-record"><i class="ri-mic-line"></i></button>
                    </div>
                    <button type="button" class="conversation-form-button conversation-form-submit"><i class="ri-send-plane-2-line"></i></button>
                </div>
            </div>
            <div class="conversation" id="conversation-2">
                <div class="conversation-top">
                    <button type="button" class="conversation-back"><i class="ri-arrow-left-line"></i></button>
                    <div class="conversation-user">
                        <img class="conversation-user-image" src="https://images.unsplash.com/photo-1534528741775-53994a69daeb?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8OXx8cGVvcGxlfGVufDB8fDB8fHww&auto=format&fit=crop&w=500&q=60" alt="">
                        <div>
                            <div class="conversation-user-name">Someone 1</div>
                            <div class="conversation-user-status online">online</div>
                        </div>
                    </div>
                    <div class="conversation-buttons">
                        <button type="button"><i class="ri-phone-fill"></i></button>
                        <button type="button"><i class="ri-vidicon-line"></i></button>
                        <button type="button"><i class="ri-information-line"></i></button>
                    </div>
                </div>
                <div class="conversation-main">
                    <ul class="conversation-wrapper">
                        <div class="coversation-divider"><span>Today</span></div>
                        <li class="conversation-item me">
                            <div class="conversation-item-side">
                                <img class="conversation-item-image" src="https://images.unsplash.com/photo-1534528741775-53994a69daeb?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8OXx8cGVvcGxlfGVufDB8fDB8fHww&auto=format&fit=crop&w=500&q=60" alt="">
                            </div>
                            <div class="conversation-item-content">
                                <div class="conversation-item-wrapper">
                                    <div class="conversation-item-box">
                                        <div class="conversation-item-text">
                                            <p>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Amet natus repudiandae quisquam sequi nobis suscipit consequatur rerum alias odio repellat!</p>
                                            <div class="conversation-item-time">12:30</div>
                                        </div>
                                        <div class="conversation-item-dropdown">
                                            <button type="button" class="conversation-item-dropdown-toggle"><i class="ri-more-2-line"></i></button>
                                            <ul class="conversation-item-dropdown-list">
                                                <li><a href="#"><i class="ri-share-forward-line"></i> Forward</a></li>
                                                <li><a href="#"><i class="ri-delete-bin-line"></i> Delete</a></li>
                                            </ul>
                                        </div>
                                    </div>
                                </div>
                                <div class="conversation-item-wrapper">
                                    <div class="conversation-item-box">
                                        <div class="conversation-item-text">
                                            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Eaque, tenetur!</p>
                                            <div class="conversation-item-time">12:30</div>
                                        </div>
                                        <div class="conversation-item-dropdown">
                                            <button type="button" class="conversation-item-dropdown-toggle"><i class="ri-more-2-line"></i></button>
                                            <ul class="conversation-item-dropdown-list">
                                                <li><a href="#"><i class="ri-share-forward-line"></i> Forward</a></li>
                                                <li><a href="#"><i class="ri-delete-bin-line"></i> Delete</a></li>
                                            </ul>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </li>
                        <li class="conversation-item">
                            <div class="conversation-item-side">
                                <img class="conversation-item-image" src="https://images.unsplash.com/photo-1534528741775-53994a69daeb?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8OXx8cGVvcGxlfGVufDB8fDB8fHww&auto=format&fit=crop&w=500&q=60" alt="">
                            </div>
                            <div class="conversation-item-content">
                                <div class="conversation-item-wrapper">
                                    <div class="conversation-item-box">
                                        <div class="conversation-item-text">
                                            <p>Lorem, ipsum dolor sit amet consectetur adipisicing elit.</p>
                                            <div class="conversation-item-time">12:30</div>
                                        </div>
                                        <div class="conversation-item-dropdown">
                                            <button type="button" class="conversation-item-dropdown-toggle"><i class="ri-more-2-line"></i></button>
                                            <ul class="conversation-item-dropdown-list">
                                                <li><a href="#"><i class="ri-share-forward-line"></i> Forward</a></li>
                                                <li><a href="#"><i class="ri-delete-bin-line"></i> Delete</a></li>
                                            </ul>
                                        </div>
                                    </div>
                                </div>
                                <div class="conversation-item-wrapper">
                                    <div class="conversation-item-box">
                                        <div class="conversation-item-text">
                                            <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Atque eos ab in?</p>
                                            <div class="conversation-item-time">12:30</div>
                                        </div>
                                        <div class="conversation-item-dropdown">
                                            <button type="button" class="conversation-item-dropdown-toggle"><i class="ri-more-2-line"></i></button>
                                            <ul class="conversation-item-dropdown-list">
                                                <li><a href="#"><i class="ri-share-forward-line"></i> Forward</a></li>
                                                <li><a href="#"><i class="ri-delete-bin-line"></i> Delete</a></li>
                                            </ul>
                                        </div>
                                    </div>
                                </div>
                                <div class="conversation-item-wrapper">
                                    <div class="conversation-item-box">
                                        <div class="conversation-item-text">
                                            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Sint, debitis. Iste natus est aliquam ipsum doloremque fugiat, quidem eos autem? Dolor quisquam laboriosam enim cum laborum suscipit perferendis adipisci praesentium.</p>
                                            <div class="conversation-item-time">12:30</div>
                                        </div>
                                        <div class="conversation-item-dropdown">
                                            <button type="button" class="conversation-item-dropdown-toggle"><i class="ri-more-2-line"></i></button>
                                            <ul class="conversation-item-dropdown-list">
                                                <li><a href="#"><i class="ri-share-forward-line"></i> Forward</a></li>
                                                <li><a href="#"><i class="ri-delete-bin-line"></i> Delete</a></li>
                                            </ul>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </li>
                        <li class="conversation-item me">
                            <div class="conversation-item-side">
                                <img class="conversation-item-image" src="https://images.unsplash.com/photo-1534528741775-53994a69daeb?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8OXx8cGVvcGxlfGVufDB8fDB8fHww&auto=format&fit=crop&w=500&q=60" alt="">
                            </div>
                            <div class="conversation-item-content">
                                <div class="conversation-item-wrapper">
                                    <div class="conversation-item-box">
                                        <div class="conversation-item-text">
                                            <p>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Quas, eos, magni temporibus, placeat consectetur nobis incidunt dicta a culpa vel esse. Facilis fugiat possimus eveniet accusamus dignissimos pariatur inventore animi rem vero, eligendi obcaecati fugit quaerat? Officia ex quod eaque maxime ipsam, tempore error laboriosam laborum, magnam ipsum doloremque quas.</p>
                                            <div class="conversation-item-time">12:30</div>
                                        </div>
                                        <div class="conversation-item-dropdown">
                                            <button type="button" class="conversation-item-dropdown-toggle"><i class="ri-more-2-line"></i></button>
                                            <ul class="conversation-item-dropdown-list">
                                                <li><a href="#"><i class="ri-share-forward-line"></i> Forward</a></li>
                                                <li><a href="#"><i class="ri-delete-bin-line"></i> Delete</a></li>
                                            </ul>
                                        </div>
                                    </div>
                                </div>
                                <div class="conversation-item-wrapper">
                                    <div class="conversation-item-box">
                                        <div class="conversation-item-text">
                                            <p>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Temporibus debitis odio maiores perferendis ipsa repudiandae amet blanditiis quod. Ullam, dolorum.</p>
                                            <div class="conversation-item-time">12:30</div>
                                        </div>
                                        <div class="conversation-item-dropdown">
                                            <button type="button" class="conversation-item-dropdown-toggle"><i class="ri-more-2-line"></i></button>
                                            <ul class="conversation-item-dropdown-list">
                                                <li><a href="#"><i class="ri-share-forward-line"></i> Forward</a></li>
                                                <li><a href="#"><i class="ri-delete-bin-line"></i> Delete</a></li>
                                            </ul>
                                        </div>
                                    </div>
                                </div>
                                <div class="conversation-item-wrapper">
                                    <div class="conversation-item-box">
                                        <div class="conversation-item-text">
                                            <p>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Accusantium blanditiis ea, voluptatum, eveniet at harum minima maxime enim aut non, iure expedita excepturi tempore nostrum quasi natus voluptas dolore ducimus!</p>
                                            <div class="conversation-item-time">12:30</div>
                                        </div>
                                        <div class="conversation-item-dropdown">
                                            <button type="button" class="conversation-item-dropdown-toggle"><i class="ri-more-2-line"></i></button>
                                            <ul class="conversation-item-dropdown-list">
                                                <li><a href="#"><i class="ri-share-forward-line"></i> Forward</a></li>
                                                <li><a href="#"><i class="ri-delete-bin-line"></i> Delete</a></li>
                                            </ul>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </li>
                    </ul>
                </div>
                <div class="conversation-form">
                    <button type="button" class="conversation-form-button"><i class="ri-emotion-line"></i></button>
                    <div class="conversation-form-group">
                        <textarea class="conversation-form-input" rows="1" placeholder="Type here..."></textarea>
                        <button type="button" class="conversation-form-record"><i class="ri-mic-line"></i></button>
                    </div>
                    <button type="button" class="conversation-form-button conversation-form-submit"><i class="ri-send-plane-2-line"></i></button>
                </div>
            </div>
            <!-- end: Conversation -->
        </div>
        <!-- end: Content -->
    </div>
</section>
    </div>
        `;
    }
}




