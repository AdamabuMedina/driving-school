let map;

function initMap() {
  const center = [44.602762074602964, 40.11127749999997];
  map = new ymaps.Map("map", {
    center: center,
    zoom: 17,
  });

  let placemark = new ymaps.Placemark(
    center,
    {
      balloonContentHeader: "Автошкола Бумер",
      balloonContentBody: "г. Майкоп, ул. Гагарина, д. 34",
      balloonContentFooter: `<b>Анзор Аскарбиевич</b> <a href="tel:+79182214700">+7 918 221-47-00</a>
      <br/>
      <b>Артур Черимович</b> <a href="tel:+79385515999">+7 938 551-59-99</a>`,
    },
    {
      iconLayout: "default#image",
      iconImageHref:
        "https://cdn-icons-png.flaticon.com/512/14090/14090313.png",
      iconImageSize: [40, 40],
      iconImageOffset: [-19, -44],
    }
  );

  map.controls.remove("geolocationControl"); // удаляем геолокацию
  map.controls.remove("searchControl"); // удаляем поиск
  map.controls.remove("trafficControl"); // удаляем контроль трафика
  map.controls.remove("typeSelector"); // удаляем тип
  map.controls.remove("fullscreenControl"); // удаляем кнопку перехода в полноэкранный режим
  map.controls.remove("zoomControl"); // удаляем контрол зуммирования
  map.controls.remove("rulerControl"); // удаляем контрол правил
  // map.behaviors.disable(["scrollZoom"]); // отключаем скролл карты (опционально)

  map.geoObjects.add(placemark);
}

ymaps.ready(initMap);
