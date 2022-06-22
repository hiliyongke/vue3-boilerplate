import regular from './regular';

exports.email = email => email && regular.email.test(email);
exports.url = url => url && regular.url.test(url);
exports.domain = domain => domain && regular.domain.test(domain);
exports.ipAddress = ipAddress => ipAddress && regular.ipAddress.test(ipAddress);
exports.creditCard = creditCard =>
  creditCard && regular.creditCard.test(creditCard);
exports.alphaNumeric = alphaNumeric =>
  alphaNumeric && regular.alphaNumeric.test(alphaNumeric);
exports.number = number => number && regular.number.test(number);
exports.basicAuth = basicAuth => basicAuth && regular.basicAuth.test(basicAuth);
exports.html = html => html && regular.html.test(html);
exports.phone = phone => phone && regular.phone.test(phone);
exports.yearToDay = yearToDay => yearToDay && regular.yearToDay.test(yearToDay);
exports.tel = tel => tel && regular.tel.test(tel);
exports.IDCard = IDCard => IDCard && regular.IDCard.test(IDCard);
exports.chinese = chinese => chinese && regular.chinese.test(chinese);
exports.decimal = decimal => decimal && regular.decimal.test(decimal);
exports.EN = EN => EN && regular.EN.test(EN);
exports.smallEn = smallEn => smallEn && regular.smallEn.test(smallEn);
exports.bigEn = bigEn => bigEn && regular.bigEn.test(bigEn);
exports.ipv4 = ipv4 => ipv4 && regular.ipv4.test(ipv4);
exports.ipv6 = ipv6 => ipv6 && regular.ipv6.test(ipv6);
exports.weChatNum = weChatNum => weChatNum && regular.weChatNum.test(weChatNum);
exports.PostalCode = PostalCode =>
  PostalCode && regular.PostalCode.test(PostalCode);
exports.chineseAndNum = chineseAndNum =>
  chineseAndNum && regular.chineseAndNum.test(chineseAndNum);
exports.notEn = notEn => notEn && regular.notEn.test(notEn);
exports.thunder = thunder => thunder && regular.thunder.test(thunder);
exports.ed2k = ed2k => ed2k && regular.ed2k.test(ed2k);
exports.magnet = magnet => magnet && regular.magnet.test(magnet);
exports.subnetMask = subnetMask =>
  subnetMask && regular.subnetMask.test(subnetMask);
exports.linuxFolderPath = linuxFolderPath =>
  linuxFolderPath && regular.linuxFolderPath.test(linuxFolderPath);
exports.linuxFilePath = linuxFilePath =>
  linuxFilePath && regular.linuxFilePath.test(linuxFilePath);
exports.windowFolderPath = windowFolderPath =>
  windowFolderPath && regular.windowFolderPath.test(windowFolderPath);
exports.windowFilePath = windowFilePath =>
  windowFilePath && regular.windowFilePath.test(windowFilePath);
exports.AShares = AShares => AShares && regular.AShares.test(AShares);
exports.htmlNotes = htmlNotes => htmlNotes && regular.htmlNotes.test(htmlNotes);
exports.MD5 = MD5 => MD5 && regular.MD5.test(MD5);
exports.videoLink = videoLink => videoLink && regular.videoLink.test(videoLink);
exports.imageLink = imageLink => imageLink && regular.imageLink.test(imageLink);
exports.Hours24 = Hours24 => Hours24 && regular.Hours24.test(Hours24);
exports.Hours12 = Hours12 => Hours12 && regular.Hours12.test(Hours12);
exports.base64 = base64 => base64 && regular.base64.test(base64);
