import React from "react";

const DownLoad = () => {
  return (
    <div id="downLoad">
      <div className="container">
        <div className="downLoad">
          <h1>Часто задаваемые вопросы</h1>
          <div className="downLoad--details">
            <details>
              <summary>
                Как зарегистрироваться в Личном кабинете и пользоваться им
              </summary>
              При регистрации указываете номер телефона, пароль и ставите
              галочку о согласии с обработкой персональных данных. Далее придет
              код подтверждения в WhatsApp, который необходимо ввести. В Личном
              кабинете в разделе «Профиль» можно выбрать приоритетный клуб. В
              разделе «Главная» находятся все приобретенные услуги. В «Занятия»
              указана история посещений. Раздел «Расписание» имеет функционал
              приобретения и записи клиентов. Также услуги можно приобрести в
              разделе «Магазин», но без наличия записи.
            </details>
            <details>
              <summary>Какие типы услуг есть</summary>
              В Культурном центре «Строгино» существует групповые и
              индивидуальные занятия. <br /> Список услуг групповых занятий:{" "}
              <br />· Пробное занятия. Включает в себя одноразовое платное или{" "}
              <br />
              бесплатное посещение без возможности дальнейшего использования. ·{" "}
              <br />
              Разовые занятия. Включают в себя одноразовое платное посещение на{" "}
              <br />
              определенную дату. · Абонемент. Включает в себя ограниченное{" "}
              <br />
              количество занятий на протяжении 40 дней с момента первого <br />
              посещения. · Мастер классы. Включают в себя одноразовое посещение{" "}
              <br />
              на определенную дату.
            </details>
            <details>
              <summary>Как записаться на пробное занятие</summary>
              Записаться на пробное занятие можно через раздел «Расписание»,
              либо в «Магазине», выбрав необходимую услугу с пробным занятием.
            </details>
            <details>
              <summary>Как приобрести услугу</summary>
              Услугу приобрести могут только авторизованные клиенты через
              «Расписание» или «Магазин». Также можно воспользоваться «Быстрой
              покупкой» на страницах каждой студии переходя по ссылкам в
              «Тарифах».
            </details>
            <details>
              <summary>Какие способы оплаты</summary>
              Оплатить услуги можно через сайт, мобильное приложение или на
              месте в отделе продаж Культурных центров «Строгино».
            </details>
            <details>
              <summary>Как пользоваться магазином</summary>В магазине можно
              приобрести услуги по прайсу Культурного центра «Строгино». Чтобы
              приобрести услуги через магазин, необходимо в Личном кабинете
              перейти в данный раздел и выбрать необходимую услугу из
              расположенных в каталогах.
            </details>
            <details>
              <summary>Как пользоваться расписанием</summary>
              Выбирая необходимое занятие, попадаете в раздел предварительной
              покупки и записи. Здесь Вы можете ознакомится с информацией о
              преподавателе, о самом занятии и сколько свободных мест осталось.
              Нажимая кнопку «Купить», попадаете на предварительную покупку
              пакета услуг по данному занятию. Далее выбираете нужную услугу на
              приобретение.
            </details>
            <details>
              <summary>
                Как составить расписание и записаться на занятия
              </summary>
              Если у вас уже есть купленный абонемент, то Вы автоматически
              записываетесь на все занятия. К Вам придет сообщение по WhatsApp.
              Отредактировать его можно через Личный кабинет (в разделе
              «Занятия» и/или приложение клиента («Мои занятия») и нажимаете
              «Отменить запись».Чтобы записаться на занятия у Вас должна быть
              оплачена услуга. Если у клиента имеется задолженность, то найти
              информацию можно в Личном кабинете, раздел «Главное». Для записи
              на занятия перейдите в раздел «Расписание». Вместо «Купить» будет
              указано «Бронирование» и приобретенная услуга.Для бюджетных групп
              создана функция отправки заявок. Если бюджетная группа открыта, то
              на странице сайта группы Вы можете оставить заявку на запись в
              бюджетную группу. После одобрения с Вами свяжутся сотрудники
              Культурного центра «Строгино» для подписания договора.
            </details>
          </div>
        </div>
      </div>
    </div>
  );
};

export default DownLoad;
