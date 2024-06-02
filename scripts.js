// 各ジャンルごとの音声ファイルのリスト
var genreData = {
  "通常ボイス": [
    "いけいけいけいけいけいけ",
    "いけっ",
    "うわっ、待って待って待って待って待って",
    "ごめんすぎ",
    "ソーリメンすぎる",
    "どうしよっかな～",
    "ナイスだ～",
    "なんやねん",
    "パラノイアぼーん",
    "フォローありがとう",
    "まずいです",
    "歯茎すぎでしょ",
    "出ちゃった～",
    "勝てない～～",
    "勝てない…",
    "痛い痛い痛いやめてやめてブユーン",
    "入ったボイボイン",
    "あぁ～～～ソーリー",
  ],
  "ヴァロボイス": [
    "爆発注意",
    "平気なふりをしても無駄よ",
    "放火に耐えられるか",
    "木っ端微塵",
    "ふらついている",
    "ふらついてる",
    "がっかりね",
    "目を奪うわ",
    "目を奪うわ-2",
    "目を奪うわ-3",
    "踊らせてやるよ",
    "Aにスパイクよ",
    "Aに敵がいる",
    "Aに敵がいる-2",
    "Aに敵がいる-3",
    "くらえ",
    "パーティターイム",
    "パーフェクト",
    "バイバーイ",
    "くらえ～",
    "くらえ-2",
    "Aに敵よ",
    "Aに敵確認",
    "Aに敵確認-2",
    "Bでキャリアーダウン",
    "Bでキャリアダウン",
    "Bに敵",
    "どこへ向かうの？",
    "Bに敵確認",
    "Bに敵確認-2",
    "Bに敵確認-3",
    "Cに敵がいる",
    "アラームボットダウン",
    "アラームボット展開",
    "アラームボット廃止",
    "エントリーするぅ",
    "アルティメット準備完了",
    "アルティメット準備完了-2",
    "アルティメット準備完了あぁ～",
    "いくぞ、準備は整った",
    "いつだって僕はいつだって真剣なんだ",
    "お金ならあるよ",
    "カウントダウン開始",
    "カウントダウン開始-2",
    "カチャカチャカチャ恐れるがいい",
    "キャリアダウン",
    "グレネード",
    "グレネード展開",
    "グレネード展開-2",
    "グレネード配置",
    "グレネード配置-2",
    "ぐわぁキャリアーダウン",
    "こいつは後から膝にくる",
    "ここだぁ",
    "ここにしよう",
    "ここよ",
    "これがチームの力だね",
    "これくれなーい？",
    "これで全部だね",
    "これ買ってくれなーい？",
    "さらばだ",
    "サンキュー",
    "サンキュー-2",
    "サンキュー-3",
    "サンキュー-4",
    "サンキュー-5",
    "サンキュー-6",
    "サンキュー-7",
    "サンキュー-8",
    "スティムビーコン",
    "スティムビーコンじゃ",
    "スティムビーコンじゃ-2",
    "スパイクを設置",
    "スパイク設置",
    "セントリー設置",
    "タレットがやられた",
    "タレット展開",
    "タレット展開-2",
    "テレポート可能だ",
    "どうもね！",
    "どうもね",
    "ドッカーン",
    "なにか必要か？",
    "なにか必要か？-2",
    "なんだろう、私達と似てる、でも、何かが違う",
    "ビーコン展開",
    "ひと暴れしようか",
    "ブラボー",
    "ボットがやられた",
    "マッチポイント",
    "リロード",
    "リロード中",
    "リロード中-2",
    "リロード中-3",
    "リロード中-4",
    "俺のなんたらには逃れられない",
    "俺はっ、ハンターだ",
    "皆殺しよ",
    "皆殺しよ-2",
    "獲物は狩り尽くした",
    "気づいたことは全部報告して、次に活かすから",
    "気をつけて",
    "気をつけろ",
    "気をつけろ…",
    "恐れるがいい",
    "胸が痛むわ",
    "金はあるぞ",
    "見とれるなよ、集中しろ",
    "行こうか",
    "三人目",
    "散れぇ",
    "残念ね",
    "始末した",
    "視界を塞ぐ",
    "視界を塞ぐ-2",
    "視界を塞ぐぅ",
    "視界を奪う",
    "失せな",
    "射撃の調子が悪くても、他にやれることはあるさ",
    "邪魔者には消えてもらう",
    "弱点を見つけて突くんだ",
    "狩りの時間よ",
    "狩りの時間よ-2",
    "銃がある",
    "銃があるよ",
    "消えてもらおうか！",
    "消えろぉ…",
    "心臓の音が分かる？",
    "深呼吸だ",
    "神のなんたら",
    "前半、最終ラウンド",
    "全員倒していいのよね",
    "装備がいる",
    "装備くれなーい？",
    "装備くれない？",
    "装備くれない？-2",
    "待ちなさい！",
    "待ってください",
    "誰か買ってくれない？",
    "中央でキャリアダウン",
    "中央に敵がいる",
    "中央に敵よ",
    "注意して",
    "注意して-2",
    "敵、残り1名",
    "敵を見つけて",
    "敵を排除",
    "敵残り1名",
    "倒した",
    "逃げられないど!",
    "逃げられないど",
    "爆弾から逃げたとこを狙い撃ち",
    "ありがと",
    "ありがと-2",
    "さぁ!未知の世界へ",
  ],
  "ヴァロSE": [
    "ぐゆんぐゆんぐゆんぐゆん",
    "ぐりゅんぐりゅんぐりゅんぐりゅんぐりゅんぐりゅん",
    "グルグルグルぼーん",
    "カチャ",
    "ガチャガチャガチャバーン",
    "カチャカチャカチャバシャーン",
    "カチャン",
    "きゅーんひゅんひゅんひゅんひゅーん",
    "サクサクサクサクサクサクサク",
    "サクサクサクサクシャンシャンシャンシャン",
    "シャキン",
    "シュイーン",
    "しゅん",
    "スパイクカウントダウン早め",
    "スパイクカウントダウン遅め",
    "チャンピオンフィニッシャー",
    "チャンピオンフィニッシャー-2",
    "トコトコトコトコトコ",
    "ドドドドドドドン",
    "ドドドドボボボボボ",
    "とんとんとんととんととんとんとんとんとんとんとんととん",
    "とんとんとんとんとんとんとん",
    "トントントントントントントントン",
    "ドンボンボンボンボンボン",
    "ばぁぁぁぁぁぁぁ",
    "ばぁーーん",
    "バーーーン",
    "バーーーン-2",
    "ぱうーん",
    "ぱうーん-2",
    "ばうばうばうばう",
    "ばうばうばうばうばう",
    "ばばばばばばあばばばばばば",
    "ぱぱぱぱぱぱぱぼぼぼぼぼぼぼぱぱぱぱぱぱぱぼぼぼぼぼぼぼ",
    "バババババババン",
    "バババンイャァーー",
    "パヒャヒャバヒュシュンシュンシュンシュン",
    "はひゅーん、ボン",
    "パヒューン",
    "パヒューン-2",
    "ぱひゅーんヒュンヒュンヒュン",
    "ぱゆーん",
    "ばよよーん",
    "バンバンバンバンバンバン",
    "ピピピピピピ",
    "ぴやん",
    "ヒュヒュヒュヒュ",
    "ひょよーん",
    "ぴよよよん",
    "ピンピンピンピンピンピンピン",
    "ぶいーーん",
    "ぶーーーん",
    "ぶーん",
    "ブシュー",
    "ぶしゅーん",
    "プシュッ",
    "プシュンガシャンガシャンプシューン",
    "ぷぷぷぷぷぷぷぷ",
    "ブユーン",
    "プユーン",
    "ぶよーん",
    "ぼーーーーん",
    "ぼーーん",
    "ぼーん",
    "ぼーん-2",
    "ぼーん-3",
    "ぼぼぼぼぼぼうーん散れぇ",
    "ぽぽぽぽぽぽぼーんちゅちゅんどんどん",
    "ぼぼぼぼぼぼぼぼ",
    "ボボボボボボボン",
    "ぽぽぽぽぽん",
    "ぼよーん",
    "ポヨーン",
    "ぼよーん-2",
    "ぼよーん-3",
    "ボヨンボヨーン",
    "ポンポンポンプシャーン",
    "ボンボンボンボン",
    "ポンポンポンポンポンポンポン",
    "むにゅ",
    "むにゅむにゅむにゅむにゅむにゅ",
    "ワンワンワンワンワンワンワンワン",
  ],
  "VCボイス": [
    "裏裏裏",
    "あ、ミッドミッド",
    "あざます",
    "ありがとありがと",
    "ありがとうございます",
    "ありがとうございます-2",
    "ありがとうございます-3",
    "ウルトケア",
    "お願いします",
    "ガレージ",
    "シェリフもらっていいですか？",
    "ソーリー、ありがとうございました",
    "ソーリー",
    "ナイス",
    "ナイス-2",
    "ナイス-3",
    "ナイストライ",
    "ナイスナイス",
    "ナイスナイス-2",
    "バック",
    "ミッドミッド",
    "ランプ1ランプ1",
    "せーの",
  ],
  "鳴き声": [
    "あぁ～",
    "あぁ～っ",
    "あぁぁっ",
    "あぁっ！",
    "ああっ…",
    "あっああっ",
    "あはははは～",
    "ぶぃぶぃぶぃぶぃぶぃぶぃぶぃ",
    "ぶぃぶぃぶぃぶぃぶぃぶぃぶぃ-2",
    "かぁっ!",
    "くぁ～～～～",
    "くぅぁ～",
    "くそぉ",
    "こんこんこんこんこんこんこんこん",
    "たぁーっクラッチ",
    "どぅわぁ！",
    "どぅわぁ～",
    "わぁ!",
    "んがぁ！",
    "んなぁ～",
  ]
};

// 音声ボタンを生成する関数
function createAudioButtons(audioFiles) {
  var container = document.getElementById('buttonContainer');
  container.innerHTML = ''; // ボタンを一度クリア

  // 音声ファイルのリストをあいうえお順にソート
  audioFiles.sort(function(a, b) {
    return a.localeCompare(b);
  });

  for (var i = 0; i < audioFiles.length; i++) {
    var fileName = audioFiles[i];
    var button = document.createElement('button');
    button.textContent = fileName;
    (function(fileName, button) { // fileName と button を引数としてクロージャーに渡す
      button.onclick = function() {
        playSound(fileName, button);
      };
    })(fileName, button); // fileName と button を渡す

    var audio = document.createElement('audio');
    audio.id = fileName;
    audio.src = 'voice/' + fileName + '.mp3';

    container.appendChild(button);
    container.appendChild(audio);
  }
}

// 音声を再生する関数
function playSound(soundId, button) {
  var sound = document.getElementById(soundId);
  sound.volume = document.getElementById('volume').value;

  // 再生中のボタンをハイライト
  var playingButton = document.querySelector('button.playing');
  if (playingButton) {
    playingButton.classList.remove('playing');
  }
  button.classList.add('playing');

  sound.play();

  sound.onended = function() {
    button.classList.remove('playing');
  };
}

// ジャンルボタンを生成する関数
function createGenreButtons(genreData) {
  var container = document.getElementById('genreButtons');

  for (var genre in genreData) {
    if (genreData.hasOwnProperty(genre)) {
      var genreButton = document.createElement('button');
      genreButton.textContent = genre;
      genreButton.className = 'genreButton';
      genreButton.onclick = (function(genre, genreButton) {
        return function() {
          // すべてのジャンルボタンから 'selected' クラスを削除
          var genreButtons = document.querySelectorAll('.genreButton');
          genreButtons.forEach(function(button) {
            button.classList.remove('selected');
          });

          // クリックされたジャンルボタンに 'selected' クラスを追加
          genreButton.classList.add('selected');

          displayGenreButtons(genre);
        };
      })(genre, genreButton);

      container.appendChild(genreButton);
    }
  }

  // デフォルトで選択されている "通常ボイス" のジャンルボタンに 'selected' クラスを追加
  document.querySelector('.genreButton').classList.add('selected');
}

// ジャンルごとのボタンを表示する関数
function displayGenreButtons(genre) {
  var genreList = genreData[genre];
  if (genreList) { // ジャンルが存在することを確認
    createAudioButtons(genreList);
  } else {
    console.error('ジャンル ' + genre + ' は存在しません。');
  }
}

// ジャンルボタンを生成
createGenreButtons(genreData);

// デフォルトで "通常ボイス" のボイスボタンを表示
displayGenreButtons("通常ボイス");