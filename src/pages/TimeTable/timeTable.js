import React from "react";
import {DayCell, ColumnTitle, EmptyCell, TimeCell} from "../../components/DayColumn";
import { schedule } from "../HomePage/loginPage";

export default function TimeTable() {

  return (
      <>
          <div className="container-baner">
              <div className="column" id="time">
                  <EmptyCell  hei={1}  />
              </div>

              <div className="column">
                  <ColumnTitle hei={1} title={"Sobota 04.09"} />
              </div>

              <div className="column">
                  <ColumnTitle hei={1} title={"Niedziela 05.09"} />
              </div>

              <div className="column">
                  <ColumnTitle hei={1} title={"Poniedziałek 06.09"} />
              </div>

              <div className="column">
                  <ColumnTitle hei={1} title={"Wtorek 07.09"} />
              </div>

              <div className="column">
                  <ColumnTitle hei={1} title={"Środa 08.09"} />
              </div>

              <div className="column">
                  <ColumnTitle hei={1} title={"Czwartek 09.09"} />
              </div>
          </div>
          <div className="container">

              <div className="column" id="time">
                  {hour.map((h) => (
                      <TimeCell hei={1} title={h.hours} />
                  ))}
              </div>

              <div className="column">
                  <EmptyCell  hei={6}  />
                  {schedule
                      .filter((day) => day[1].split(" ")[0] === "2021-09-04")
                      .map((filteredDay) => (
                          <DayCell
                              id={filteredDay.event_id}
                              hours={filteredDay.start_datetime}
                              title={filteredDay.title}
                              description={filteredDay.description}
                              place={"oboz"}
                              hei={calcTime(
                                  filteredDay.start_datetime,
                                  filteredDay.end_datetime
                              )}
                          />
                      ))}
              </div>
              <div className="column">
                  <EmptyCell  hei={1}  />
                  {schedule
                      .filter((day) => day[1].split(" ")[0] === "2021-09-05")
                      .map((filteredDay) => (
                          <DayCell
                              id={filteredDay.event_id}
                              hours={filteredDay.start_datetime}
                              title={filteredDay.title}
                              description={filteredDay.description}
                              place={"oboz"}
                              hei={calcTime(
                                  filteredDay.start_datetime,
                                  filteredDay.end_datetime
                              )}
                          />
                      ))}
              </div>
              <div className="column">

                  <EmptyCell  hei={1}  />
                  {schedule
                      .filter((day) => day[1].split(" ")[0] === "2021-09-06")
                      .map((filteredDay) => (
                          <DayCell
                              id={filteredDay.event_id}
                              hours={filteredDay.start_datetime}
                              title={filteredDay.title}
                              description={filteredDay.description}
                              place={"oboz"}
                              hei={calcTime(
                                  filteredDay.start_datetime,
                                  filteredDay.end_datetime
                              )}
                          />
                      ))}
              </div>
              <div className="column">

                  <EmptyCell  hei={1}  />
                  {schedule
                      .filter((day) => day[1].split(" ")[0] === "2021-09-07")
                      .map((filteredDay) => (
                          <DayCell
                              id={filteredDay.event_id}
                              hours={filteredDay.start_datetime}
                              title={filteredDay.title}
                              description={filteredDay.description}
                              place={"oboz"}
                              hei={calcTime(
                                  filteredDay.start_datetime,
                                  filteredDay.end_datetime
                              )}
                          />
                      ))}
              </div>
              <div className="column">

                  <EmptyCell  hei={1}  />
                  {schedule
                      .filter((day) => day[1].split(" ")[0] === "2021-09-08")
                      .map((filteredDay) => (
                          <DayCell
                              id={filteredDay.event_id}
                              hours={filteredDay.start_datetime}
                              title={filteredDay.title}
                              description={filteredDay.description}
                              place={"oboz"}
                              hei={calcTime(
                                  filteredDay.start_datetime,
                                  filteredDay.end_datetime
                              )}
                          />
                      ))}
              </div>
              <div className="column">

                  <EmptyCell  hei={1}  />
                  {schedule
                      .filter((day) => day[1].split(" ")[0] === "2021-09-09")
                      .map((filteredDay) => (
                          <DayCell
                              id={filteredDay.event_id}
                              hours={filteredDay.start_datetime}
                              title={filteredDay.title}
                              description={filteredDay.description}
                              place={"oboz"}
                              hei={calcTime(
                                  filteredDay.start_datetime,
                                  filteredDay.end_datetime
                              )}
                          />
                      ))}
                  <EmptyCell  hei={21}  />
              </div>
          </div>

      </>

  );
}



const hour = [
    { hours: "08:00" },
  { hours: "08:30" },
  { hours: "09:00" },
  { hours: "09:30" },
  { hours: "10:00" },
  { hours: "10:30" },
  { hours: "11:00" },
  { hours: "11:30" },
  { hours: "12:00" },
  { hours: "12:30" },
  { hours: "13:00" },
  { hours: "13:30" },
  { hours: "14:00" },
  { hours: "14:30" },
  { hours: "15:00" },
  { hours: "15:30" },
  { hours: "16:00" },
  { hours: "16:30" },
  { hours: "17:00" },
  { hours: "17:30" },
  { hours: "18:00" },
  { hours: "18:30" },
  { hours: "19:00" },
  { hours: "19:30" },
  { hours: "20:00" },
  { hours: "20:30" },
  { hours: "21:00" },
  { hours: "21:30" },
  { hours: "22:00" },
  { hours: "22:30" },
  { hours: "23:00" },
  { hours: "23:30" },
  { hours: "00:00" },


];

function calcTime(start, end) {
  let st = Date.parse(start);
  let en = Date.parse(end);
  let sum = (en - st) / 1800000;
  if (sum < 0) {
    sum = 48 + sum;
  }
  return sum;
}
