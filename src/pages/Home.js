import React from "react";

import EventHistoryChart from "../components/EventHistoryChart";
import CircleChart from "../components/CircleChart";
import Sidebar from "../components/Sidebar/Sidebar";

import { Button } from "../components/Styled-components/Styled-Button";
import { Select } from "../components/Styled-components/Styled-Select";

import "../assets/styles/home.scss";
import configIcon from "../assets/icons/Config.svg";
import greenCircle from "../assets/icons/green-circle.svg";
import orangeCircle from "../assets/icons/orange-circle.svg";
import redCircle from "../assets/icons/red-circle.svg";

export default function Home() {
  return (
    <>
      <div id="container">
        <Sidebar />
        <main>
          <header className="header">
            <h2>Painel de Controle</h2>
          </header>

          <section className="content event-history">
            <header>
              <h3>Histórico de eventos</h3>
              <div className="config">
                <Select>
                  <option disabled selected>
                    Diário
                  </option>
                  <option>Escolha</option>
                  <option>Alguma</option>
                  <option>Opção</option>
                </Select>
                <span>
                  <img src={configIcon} alt="Configurations"></img>
                </span>
              </div>
            </header>
            <div className="chart">
              <EventHistoryChart />
            </div>
            <div className="label">
              <div>
                <img src={greenCircle}  alt='icon' />
                <span>Inspeções realizadas</span>
              </div>
              <div>
                <img src={orangeCircle}  alt='icon' />
                <span>Planos de ação criados</span>
              </div>
            </div>
          </section>

          <section className="cards">
            <div className="inspection card">
              <header>
                <div>
                  <h3>Inspeções</h3>
                  <p>status do dia</p>
                </div>
                <span>
                  <img src={configIcon} alt="Configurations" />
                </span>
              </header>
              <div className="chart">
                <CircleChart />
              </div>
              <div className="label">
                <div className="indicated">
                  <div>
                    <img src={greenCircle} alt='icon' />
                    <span>Realizadas - 58%</span>
                  </div>

                  <div>
                    <img src={orangeCircle}  alt='icon' />
                    <span>Em aberto - 34.9%</span>
                  </div>

                  <div>
                    <img src={redCircle}  alt='icon' />
                    <span>Não Realizadas - 6.5%</span>
                  </div>
                </div>
                <div className="time">
                  <h4>Média de tempo</h4>
                  <div className="time-container">
                    <p>Hoje</p>
                    <span>10 min</span>
                  </div>

                  <div className="time-container">
                    <p>Últimos 7 dias</p>
                    <span>10 min</span>
                  </div>

                  <div className="time-container">
                    <p>Últimos 30 dias</p>
                    <span>10 min</span>
                  </div>
                </div>
              </div>
            </div>

            <div className="action card">
              <header>
                <div>
                  <h3>Plano de ação</h3>
                  <p>status do dia</p>
                </div>
                <span>
                  <img src={configIcon} alt="Configurations" />
                </span>
              </header>
              <div className="chart">
                <CircleChart />
              </div>
              <div className="label">
                <div className="indicated">
                  <div>
                    <img src={greenCircle}  alt="icon"/>
                    <span>Realizadas - 58%</span>
                  </div>

                  <div>
                    <img src={orangeCircle} alt="icon"/>
                    <span>Em aberto - 34.9%</span>
                  </div>

                  <div>
                    <img src={redCircle} alt='icon' />
                    <span>Não Realizadas - 6.5%</span>
                  </div>
                </div>
                <div className="time">
                  <h4>Média de tempo</h4>
                  <div className="time-container">
                    <p>Hoje</p>
                    <span>10 min</span>
                  </div>

                  <div className="time-container">
                    <p>Últimos 7 dias</p>
                    <span>10 min</span>
                  </div>

                  <div className="time-container">
                    <p>Últimos 30 dias</p>
                    <span>10 min</span>
                  </div>
                </div>
              </div>
              <h3 className="details">visualizar detalhes</h3>
            </div>
          </section>

          <section className="schedule">
            <header className="schedule-header">
              <h3>Inspeções agendadas</h3>
              <Select>
                <option disabled selected>
                  Diário
                </option>
                <option>Escolha</option>
                <option>Alguma</option>
                <option>Opção</option>
              </Select>
            </header>

            <input placeholder="Pesquise"></input>

            <table className="schedule-content">
              <thead className="names">
                <h4>Nome</h4>
                <p>Larissa Silva Gonçalves</p>
                <p>Lucas Silva Santos</p>
                <p>Raissa Oliveira Araujo</p>
                <p>Leila Dias Costa</p>
                <p>Vitória Sousa Cavalcanti</p>
                <p>Emily Araujo Oliveira</p>
                <p>Nicolas Pereira Sousa</p>
                <p>Laura Castro Gomes</p>
              </thead>
              <div className="info">
                <div className="info-content">
                  <h4>planejado</h4>
                  <p>10</p>
                  <p>10</p>
                  <p>10</p>
                  <p>8</p>
                  <p>-</p>
                  <p>4</p>
                  <p>2</p>
                  <p>2</p>
                </div>
                <div className="info-content">
                  <h4>Realizado</h4>
                  <p>10</p>
                  <p>10</p>
                  <p>10</p>
                  <p>8</p>
                  <p>-</p>
                  <p>4</p>
                  <p>2</p>
                  <p>2</p>
                </div>
                <div className="info-content">
                  <h4>Última Atualização</h4>
                  <p>08:10h 10/10/2010</p>
                  <p>08:10h 10/10/2010</p>
                  <p>08:10h</p>
                  <p>08:10h</p>
                  <p>08:10h</p>
                  <p>08:10h</p>
                  <p>08:10h</p>
                  <p>08:10h</p>
                </div>
              </div>
            </table>
          </section>
        </main>

        <aside>
          <div className="cards">
            <div className="card">
              <header>
                <div>
                  <h3>Plano de ação</h3>
                  <p>status do dia</p>
                </div>
                <span>
                  <img src={configIcon} alt="Configurations" />
                </span>
              </header>
              <div className="chart">
                <CircleChart />
              </div>
            </div>
          </div>

          <section className="action-plans">
            <div className="header-content">
              <header>
                <div>
                  <h3>Plano de ação</h3>
                  <p>atualizações</p>
                </div>
                <span>
                  <img src={configIcon} alt="Configurations" />
                </span>
              </header>

              <input></input>

              <select className="select">
                <option disabled selected>
                  pendente
                </option>
                <option>Escolha</option>
                <option>Alguma</option>
                <option>Opção</option>
              </select>
            </div>

            <div className="action-plan--content">
              <div className="action-plan">
                <div className="action-plan--name">
                  <h3>Nome do plano de ação</h3>
                  <p>responsável: Bruno Barros</p>
                </div>
                <div className="action-plan--buttons">
                  <Button>Pendente</Button>
                  <span className="icon-chevron-right"></span>
                  <Button>Realizado</Button>
                  <p>10:45 10/10/10</p>
                </div>
              </div>

              <div className="divider"></div>

              <div className="action-plan">
                <div className="action-plan--name">
                  <h3>Nome do plano de ação</h3>
                  <p>responsável: Bruno Barros</p>
                </div>
                <div>
                  <Button>Realizado</Button>
                  <p>10:45 10/10/10</p>
                </div>
              </div>

              <div className="divider"></div>

              <div className="action-plan">
                <div className="action-plan--name">
                  <h3>Nome do plano de ação</h3>
                  <p>responsável: Bruno Barros</p>
                </div>
                <div>
                  <Button>Realizado</Button>
                  <p>10:45 10/10/10</p>
                </div>
              </div>

              <div className="divider"></div>

              <div className="action-plan">
                <div className="action-plan--name">
                  <h3>Nome do plano de ação</h3>
                  <p>responsável: Bruno Barros</p>
                </div>
                <div>
                  <Button>Realizado</Button>
                  <p>10:45 10/10/10</p>
                </div>
              </div>

              <div className="divider"></div>

              <div className="action-plan">
                <div className="action-plan--name">
                  <h3>Nome do plano de ação</h3>
                  <p>responsável: Bruno Barros</p>
                </div>
                <div>
                  <Button>Realizado</Button>
                  <p>10:45 10/10/10</p>
                </div>
              </div>

              <div className="divider"></div>

              <div className="action-plan">
                <div className="action-plan--name">
                  <h3>Nome do plano de ação</h3>
                  <p>responsável: Bruno Barros</p>
                </div>
                <div>
                  <Button>Realizado</Button>
                  <p>10:45 10/10/10</p>
                </div>
              </div>

              <div className="divider"></div>

              <div className="action-plan">
                <div className="action-plan--name">
                  <h3>Nome do plano de ação</h3>
                  <p>responsável: Bruno Barros</p>
                </div>
                <div>
                  <Button>Realizado</Button>
                  <p>10:45 10/10/10</p>
                </div>
              </div>

              <div className="divider"></div>

              <div className="action-plan">
                <div className="action-plan--name">
                  <h3>Nome do plano de ação</h3>
                  <p>responsável: Bruno Barros</p>
                </div>
                <div>
                  <Button>Realizado</Button>
                  <p>10:45 10/10/10</p>
                </div>
              </div>
            </div>
          </section>
        </aside>
      </div>
    </>
  );
}
