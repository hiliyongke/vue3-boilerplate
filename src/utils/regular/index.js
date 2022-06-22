import regular from './regular';
// 是否邮箱
exports.email = email => email && regular.email.test(email);
// 是否url地址
exports.url = url => url && regular.url.test(url);
// 是否域名
exports.domain = domain => domain && regular.domain.test(domain);
// 是否ip地址
exports.ipAddress = ipAddress => ipAddress && regular.ipAddress.test(ipAddress);
// 是否信用卡
exports.creditCard = creditCard =>
  creditCard && regular.creditCard.test(creditCard);
// 是否字母和数字
exports.alphaNumeric = alphaNumeric =>
  alphaNumeric && regular.alphaNumeric.test(alphaNumeric);
// 是否数字
exports.number = number => number && regular.number.test(number);

exports.basicAuth = basicAuth => basicAuth && regular.basicAuth.test(basicAuth);
// 是否是否HTML标签
exports.html = html => html && regular.html.test(html);
// 是否手机号
exports.phone = phone => phone && regular.phone.test(phone);
// 是否年月日 2000-01-01 or 2001-1-1
exports.yearToDay = yearToDay => yearToDay && regular.yearToDay.test(yearToDay);
// 是否座机电话
exports.tel = tel => tel && regular.tel.test(tel);
// 是否2019身份证校验15位18位
exports.IDCard = IDCard => IDCard && regular.IDCard.test(IDCard);
// 是否全部中文
exports.chinese = chinese => chinese && regular.chinese.test(chinese);
// 是否小数
exports.decimal = decimal => decimal && regular.decimal.test(decimal);
// 是否全英文
exports.EN = EN => EN && regular.EN.test(EN);
// 是否小写字母
exports.smallEn = smallEn => smallEn && regular.smallEn.test(smallEn);
// 是否大写字母
exports.bigEn = bigEn => bigEn && regular.bigEn.test(bigEn);
// 是否ipv4校验
exports.ipv4 = ipv4 => ipv4 && regular.ipv4.test(ipv4);
// 是否ipv6
exports.ipv6 = ipv6 => ipv6 && regular.ipv6.test(ipv6);
// 是否微信号校验
exports.weChatNum = weChatNum => weChatNum && regular.weChatNum.test(weChatNum);
// 是否邮政编码校验
exports.PostalCode = PostalCode =>
  PostalCode && regular.PostalCode.test(PostalCode);
// 是否中文+数字
exports.chineseAndNum = chineseAndNum =>
  chineseAndNum && regular.chineseAndNum.test(chineseAndNum);
// 是否不是字母
exports.notEn = notEn => notEn && regular.notEn.test(notEn);
// 是否迅雷链接
exports.thunder = thunder => thunder && regular.thunder.test(thunder);
// 是否ed2k链接
exports.ed2k = ed2k => ed2k && regular.ed2k.test(ed2k);
// 是否磁力链接
exports.magnet = magnet => magnet && regular.magnet.test(magnet);
// 是否子网掩码
exports.subnetMask = subnetMask =>
  subnetMask && regular.subnetMask.test(subnetMask);
// 是否Linux文件夹路径
exports.linuxFolderPath = linuxFolderPath =>
  linuxFolderPath && regular.linuxFolderPath.test(linuxFolderPath);
// 是否Linux文件路径
exports.linuxFilePath = linuxFilePath =>
  linuxFilePath && regular.linuxFilePath.test(linuxFilePath);
// 是否window文件夹路径
exports.windowFolderPath = windowFolderPath =>
  windowFolderPath && regular.windowFolderPath.test(windowFolderPath);
// 是否window文件路径
exports.windowFilePath = windowFilePath =>
  windowFilePath && regular.windowFilePath.test(windowFilePath);
// 是否A股代码
exports.AShares = AShares => AShares && regular.AShares.test(AShares);
// 是否HTML注释
exports.htmlNotes = htmlNotes => htmlNotes && regular.htmlNotes.test(htmlNotes);
// 是否32位MD5
exports.MD5 = MD5 => MD5 && regular.MD5.test(MD5);
// 是否视频链接
exports.videoLink = videoLink => videoLink && regular.videoLink.test(videoLink);
// 是否图片链接
exports.imageLink = imageLink => imageLink && regular.imageLink.test(imageLink);
// 是否24小时制时间（HH:mm:ss）
exports.Hours24 = Hours24 => Hours24 && regular.Hours24.test(Hours24);
// 是否12小时制时间（hh:mm:ss）
exports.Hours12 = Hours12 => Hours12 && regular.Hours12.test(Hours12);
// 是否base64格式
exports.base64 = base64 => base64 && regular.base64.test(base64);
