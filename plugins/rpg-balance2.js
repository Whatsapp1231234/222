

const handler = async (m, {usedPrefix}) => {
  const datas = global
  const idioma = datas.db.data.users[m.sender].language
  const _translate = JSON.parse(fs.readFileSync(`./language/${idioma}.json`))
  const tradutor = _translate.plugins.rpg_balance

  let who;
  if (m.isGroup) who = m.mentionedJid[0] ? m.mentionedJid[0] : m.sender;
  else who = m.sender;
  const name = conn.getName(who);
  m.reply(`
Здравствуйте. Имеется два бота:
ВЕНЬКА болтун и ВАНИЛЬКА бот-админ
°°°°°°°°°°°°°°°°°°°°°°°°°°°°°°
_*Венька*_ поддерживает общение, скидывает гороскоп, анекдоты и прочие шутки, *присутствуют маты*.
°°°°°°°°°°°°°°°°°°°°°°°°°°°°°°
 _*Ванилька*_ вызывает всю группу через @ , удаляет за ссылки, сносит арабов и индусов,  закрывает и открывает группу по команде. 
╔════════
╠══ *ЦЕНА БОТОВ*
╠ Венька - 250₽  месяц 
╠ Ванилька - 200₽  10дней
╚════════

Какой бот вас интересует?
*ВАЖНО*⤵️
Ответственность за работу бота я не несу. Так как бот это программа и бывает виснет, на сервере перегруз, перебой. Так же ватсап блокирует номера и бот не исключение. В случае блокировки бота, деньги не возвращаю, другого не предоставляю, так как это не моя вина.
Если вас все устраивает, скидывайте ссылку на группу.
╔════════
╠
╠══ *Свяжитесь с создателем*
╠ #создатель
╠ 
╚════════



`);
};
handler.customPrefix = /а|@/i;
handler.tags = ['anonymous'];
handler.command = ['ренда'];
handler.private = true;
export default handler;
