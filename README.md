# Simple VPN detector
**Простой детектор на наличие `VPN` у пользователя.**
## Подключяем скрпт
Этот скрипт нужно подключить в блоке `<head>`.
```html
<script src="https://cdn.jsdelivr.net/gh/idsila/simple-vpn-detect/app.js"></script>
```

## Подключаем стили
Эти стили нужно подключить в блоке `<head>`.
```html
<link rel="stylesheet" href="https://cdn.jsdelivr.net/gh/idsila/simple-vpn-detect/style.css">
```

## Настраиваем детектор
Этот скрипт нужно подключить в блоке `<body>` ближе к концу.
```html
<script>
  const vpnDetector = new VpnDetector(true, 'average');
  vpnDetector.run()
</script>
```

### `VpnDetector(preload, type)`

`preload` - принимает значение, `true` или `false` и отвечает за окно проверки VPN.
`type` - принимает значение, `simple` по умолчанию, `average` или `enhanced`. Отвечает за степень защиты.
#### Описание степени защиты
- `simple` - если установить это значение, то будет появляться мешающий баннер.
- `average` - если установить это значение, то будет появляться мешающий баннер и удалиться весь другой интерфейс.
- `enhanced` - если установить это значение, то человек использующий хотя бы раз на сайте VPN получает блокировку и не сможет её убрать. Даже если выключит VPN и перезагрузит страницу.

#### Запуска скрипта
`vpnDetected.run()` - запускает проверку.
