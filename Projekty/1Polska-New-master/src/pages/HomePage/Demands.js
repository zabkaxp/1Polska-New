import React from "react";
import { NavLink } from "react-router-dom";
import "../../styles/HomePageStyles/demands.scss";
import img1 from "../../images/video-podatki.JPG";
import img2 from "../../images/video-ordynacja.JPG";
import img3 from "../../images/video-banki.JPG";
import img4 from "../../images/video-zus.JPG";
import img5 from "../../images/video-prawo.JPG";
import img6 from "../../images/video-kotwica.JPG";

const Demands = () => {
  return (
    <div class="demands">
      <div class="demands-container">
        <h1 class="demands-conatiner-text">Priorytety zmian</h1>
        <section class="demands-boxes-container">
          <div class="demands-box demands-box-1">
            <a
              target="_blank"
              rel="noopener noreferrer"
              href="https://www.youtube.com/watch?v=mDox6DTV0i0&t"
            >
              <div class="demands-img-container">
                <i class="far fa-play-circle" />
                <img src={img1} alt="link to video" class="demands-img" />
              </div>
            </a>
            <div class="demands-title">Niższe i prostsze podatki</div>
            <div class="demands-description">
              Trzeba obniżyć i uprościć podatki, trzeba oddać ludziom pieniądze,
              które zabiera im aparat państwa!
            </div>
            <NavLink to="postulaty">
              <div class="button-container">
                <div class="button">
                  <div class="demands-button-text-box">Dowiedz się więcej</div>
                </div>
              </div>
            </NavLink>
          </div>
          <div class="demands-box demands-box-2">
            <a
              target="_blank"
              rel="noopener noreferrer"
              href="https://www.youtube.com/watch?v=A0lja3vJ5uY&t"
            >
              <div class="demands-img-container">
                <i class="far fa-play-circle" />
                <img src={img2} alt="link to video" class="demands-img" />
              </div>
            </a>
            <div class="demands-title">Nowa ordynacja wyborcza</div>
            <div class="demands-description">
              Należy wprowadzić nową ordynację wyborczą zamiast tej
              niekonstytucyjnej farsy z listami partyjnymi i progiem wyborczym.
            </div>
            <NavLink to="postulaty">
              <div class="button-container">
                <div class="button">
                  <div class="demands-button-text-box">Dowiedz się więcej</div>
                </div>
              </div>
            </NavLink>
          </div>
          <div class="demands-box demands-box-3">
            <div>
              <a
                target="_blank"
                rel="noopener noreferrer"
                href="https://www.youtube.com/watch?v=PWiykwD3D7Y"
              >
                <div class="demands-img-container">
                  <i class="far fa-play-circle" />
                  <img src={img3} alt="link to video" class="demands-img" />
                </div>{" "}
              </a>
            </div>
            <div class="demands-bottom-box">
              <div class="demands-title">
                Zakaz kreacji pieniądza jako długu przez banki
              </div>
              <div class="demands-description">
                By uniemożliwić bankom okradanie ludzi za pomocą mechanizmu
                kreacji pieniądza bezgotówkowego w systemie bankowym.
              </div>
              <NavLink to="postulaty">
                <div class="button-container">
                  <div class="button">
                    <div class="demands-button-text-box">
                      Dowiedz się więcej
                    </div>
                  </div>
                </div>
              </NavLink>
            </div>
          </div>

          <div class="demands-box demands-box-4">
            <a
              target="_blank"
              rel="noopener noreferrer"
              href="https://www.youtube.com/watch?v=-WosprMbZzU&t"
            >
              <div class="demands-img-container">
                <i class="far fa-play-circle" />
                <img src={img4} alt="link to video" class="demands-img" />
              </div>
            </a>
            <div class="demands-title">Zlikwidować ZUS</div>
            <div class="demands-description">
              Każdy wie najlepiej jak dysponować własnym majątkiem oraz sam może
              decydować o tym, w jakim wieku przejść na emeryturę.
            </div>
            <NavLink to="postulaty">
              <div class="button-container">
                <div class="button">
                  <div class="demands-button-text-box">Dowiedz się więcej</div>
                </div>
              </div>
            </NavLink>
          </div>
          <div class="demands-box demands-box-5">
            <a
              target="_blank"
              rel="noopener noreferrer"
              href="https://www.youtube.com/watch?v=0iWOQUAyU6A&t"
            >
              <div class="demands-img-container">
                <i class="far fa-play-circle" />
                <img src={img6} alt="link to video" class="demands-img" />
              </div>
            </a>
            <div class="demands-title">Kotwica podatkowa</div>
            <div class="demands-description">
              Zakaz, bądź ograniczenie, wydawania przez rząd więcej pieniędzy
              niż ma.
            </div>
            <NavLink to="postulaty">
              <div class="button-container">
                <div class="button">
                  <div class="demands-button-text-box">Dowiedz się więcej</div>
                </div>
              </div>
            </NavLink>
          </div>
          <div class="demands-box demands-box-6">
            <a
              target="_blank"
              rel="noopener noreferrer"
              href="https://www.youtube.com/watch?v=LVaUYN-qThw&t"
            >
              <div class="demands-img-container">
                <i class="far fa-play-circle" />
                <img src={img5} alt="link to video" class="demands-img" />
              </div>
            </a>
            <div class="demands-title">Jasne i zrozumiałe prawo</div>
            <div class="demands-description">
              Istnieje za dużo przepisów prawnych, których nikt normalny nie
              jest w stanie nawet przeczytać, a gdzie dopiero zrozumieć i
              przestrzegać.
            </div>
            <NavLink to="postulaty">
              <div class="button-container">
                <div class="button">
                  <div class="demands-button-text-box">Dowiedz się więcej</div>
                </div>
              </div>
            </NavLink>
          </div>
        </section>
      </div>
    </div>
  );
};

export default Demands;
