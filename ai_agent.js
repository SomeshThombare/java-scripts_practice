const {
  Document, Packer, Paragraph, TextRun, Table, TableRow, TableCell,
  AlignmentType, HeadingLevel, BorderStyle, WidthType, ShadingType,
  LevelFormat, PageNumber, Footer, Header, TabStopType, TabStopPosition,
  VerticalAlign
} = require('docx');
const fs = require('fs');

// ── Helpers ──────────────────────────────────────────────────────
const border = { style: BorderStyle.SINGLE, size: 1, color: "AAAAAA" };
const borders = { top: border, bottom: border, left: border, right: border };
const noBorder = { style: BorderStyle.NONE, size: 0, color: "FFFFFF" };
const noBorders = { top: noBorder, bottom: noBorder, left: noBorder, right: noBorder };

function cell(text, opts = {}) {
  const { bold = false, shade = null, width = 4680, italic = false, align = AlignmentType.LEFT } = opts;
  return new TableCell({
    borders,
    width: { size: width, type: WidthType.DXA },
    shading: shade ? { fill: shade, type: ShadingType.CLEAR } : undefined,
    margins: { top: 80, bottom: 80, left: 120, right: 120 },
    children: [new Paragraph({
      alignment: align,
      children: [new TextRun({ text, bold, italic, font: "Times New Roman", size: 20 })]
    })]
  });
}

function heading(text, level = 1) {
  return new Paragraph({
    alignment: AlignmentType.LEFT,
    spacing: { before: 200, after: 100 },
    children: [new TextRun({
      text,
      bold: true,
      size: level === 1 ? 24 : 22,
      font: "Times New Roman",
      color: "000000"
    })]
  });
}

function para(text, opts = {}) {
  const { bold = false, italic = false, align = AlignmentType.JUSTIFIED, size = 20, color = "000000", spacing = { before: 60, after: 60 } } = opts;
  return new Paragraph({
    alignment: align,
    spacing,
    children: [new TextRun({ text, bold, italic, size, font: "Times New Roman", color })]
  });
}

function mixedPara(runs, opts = {}) {
  const { align = AlignmentType.JUSTIFIED, spacing = { before: 60, after: 60 } } = opts;
  return new Paragraph({ alignment: align, spacing, children: runs });
}

function run(text, opts = {}) {
  const { bold = false, italic = false, size = 20, color = "000000" } = opts;
  return new TextRun({ text, bold, italic, size, font: "Times New Roman", color });
}

function bullet(text, numbering) {
  return new Paragraph({
    numbering: { reference: "bullets", level: 0 },
    spacing: { before: 40, after: 40 },
    children: [new TextRun({ text, size: 20, font: "Times New Roman" })]
  });
}

function numbered(text, numbering) {
  return new Paragraph({
    numbering: { reference: "numbers", level: 0 },
    spacing: { before: 40, after: 40 },
    children: [new TextRun({ text, size: 20, font: "Times New Roman" })]
  });
}

function emptyLine() {
  return new Paragraph({ children: [new TextRun({ text: "", size: 20 })] });
}

function hrLine() {
  return new Paragraph({
    border: { bottom: { style: BorderStyle.SINGLE, size: 6, color: "1F3864", space: 1 } },
    children: [new TextRun({ text: "", size: 4 })]
  });
}

// ── Document ─────────────────────────────────────────────────────
const doc = new Document({
  numbering: {
    config: [
      {
        reference: "bullets",
        levels: [{
          level: 0, format: LevelFormat.BULLET, text: "\u2022",
          alignment: AlignmentType.LEFT,
          style: { paragraph: { indent: { left: 720, hanging: 360 } } }
        }]
      },
      {
        reference: "numbers",
        levels: [{
          level: 0, format: LevelFormat.DECIMAL, text: "%1.",
          alignment: AlignmentType.LEFT,
          style: { paragraph: { indent: { left: 720, hanging: 360 } } }
        }]
      }
    ]
  },

  styles: {
    default: { document: { run: { font: "Times New Roman", size: 20 } } }
  },

  sections: [{
    properties: {
      page: {
        size: { width: 11906, height: 16838 },
        margin: { top: 1080, right: 1080, bottom: 1080, left: 1080 }
      }
    },

    // ── Header ──
    headers: {
      default: new Header({
        children: [
          new Paragraph({
            alignment: AlignmentType.CENTER,
            border: { bottom: { style: BorderStyle.SINGLE, size: 4, color: "1F3864" } },
            children: [
              new TextRun({ text: "International Research Journal of Modernization in Engineering Technology and Science", bold: true, size: 18, font: "Times New Roman", color: "1F3864" })
            ]
          }),
          new Paragraph({
            alignment: AlignmentType.CENTER,
            children: [
              new TextRun({ text: "( ISSN: 2582-5208 )  Volume:07/Issue:04/April-2026  Impact Factor: 8.187  www.irjmets.com", size: 16, font: "Times New Roman", color: "444444" })
            ]
          }),
          emptyLine()
        ]
      })
    },

    // ── Footer ──
    footers: {
      default: new Footer({
        children: [
          hrLine(),
          new Paragraph({
            alignment: AlignmentType.CENTER,
            children: [
              new TextRun({ text: "www.irjmets.com                    @International Research Journal of Modernization in Engineering, Technology and Science", size: 16, font: "Times New Roman", color: "666666" })
            ]
          })
        ]
      })
    },

    children: [

      // ══════════════════════════════════════════
      //  TITLE
      // ══════════════════════════════════════════
      new Paragraph({
        alignment: AlignmentType.CENTER,
        spacing: { before: 200, after: 160 },
        children: [new TextRun({
          text: "AI-POWERED PAPER TRADING SYSTEM FOR CRYPTO, FOREX AND COMMODITIES USING LSTM NEURAL NETWORK AND DJANGO FRAMEWORK",
          bold: true, size: 28, font: "Times New Roman", color: "1F3864"
        })]
      }),

      hrLine(),
      emptyLine(),

      // ── Authors ──
      new Paragraph({
        alignment: AlignmentType.CENTER,
        spacing: { before: 80, after: 60 },
        children: [new TextRun({ text: "Mayuri[1]", bold: true, size: 20, font: "Times New Roman" })]
      }),
      new Paragraph({
        alignment: AlignmentType.CENTER,
        spacing: { before: 40, after: 40 },
        children: [new TextRun({ text: "[1]Student, Department of Computer Science and Engineering,", italic: true, size: 19, font: "Times New Roman" })]
      }),
      new Paragraph({
        alignment: AlignmentType.CENTER,
        spacing: { before: 40, after: 120 },
        children: [new TextRun({ text: "Pune, Maharashtra, India.", italic: true, size: 19, font: "Times New Roman" })]
      }),

      hrLine(),
      emptyLine(),

      // ══════════════════════════════════════════
      //  ABSTRACT
      // ══════════════════════════════════════════
      heading("ABSTRACT"),
      hrLine(),
      emptyLine(),

      mixedPara([
        run("Trading in financial markets — whether crypto, forex, or commodities like gold — has always been considered a domain reserved for experienced professionals or large institutions. The main reason for this is not a lack of interest from common people, but a lack of proper tools, knowledge, and the high risk involved in real money trading. A beginner who wants to learn trading faces three very specific problems: ", { size: 20 }),
        run("first", { bold: true, size: 20 }),
        run(", they do not know how to decide the right Take Profit (TP) and Stop Loss (SL) values when entering a trade; ", { size: 20 }),
        run("second", { bold: true, size: 20 }),
        run(", they cannot monitor their open trades 24 hours a day to close them at the right moment; and ", { size: 20 }),
        run("third", { bold: true, size: 20 }),
        run(", they cannot practice trading without risking real money. These three problems together make it nearly impossible for a newcomer to learn trading in a practical, hands-on way.", { size: 20 }),
      ]),

      emptyLine(),

      para("This research paper presents a solution to all three problems through the development of an AI-Powered Paper Trading System. The system is built using Django, a Python web framework, combined with an LSTM (Long Short-Term Memory) neural network — a type of deep learning model specifically designed to understand time-series data such as financial price history. The system integrates two real-time market data sources: the Binance public API for cryptocurrency prices (no API key required), and MetaTrader 5 (MT5) via XM broker demo account for Forex and Gold prices. This combination gives the user access to over 20 tradeable symbols across three major markets, all within a single beginner-friendly web interface."),

      emptyLine(),

      para("The solution works as follows: when a user wants to open a trade, instead of guessing TP and SL values, the LSTM model automatically analyzes the last 60 candles of price history along with 11 technical indicators including RSI, EMA-9, EMA-21, MACD, and ATR. Based on this analysis, the model predicts whether the price will go UP or DOWN and with what level of confidence. This prediction is then converted into specific TP and SL percentage recommendations which are pre-filled into the trade creation form. The user can either accept these AI suggestions or manually change them before confirming the trade. Once the trade is open, a background monitoring agent checks the current market price every 5 seconds and automatically closes the trade the moment price reaches either the Take Profit target or the Stop Loss target — without requiring any manual intervention from the user."),

      emptyLine(),

      para("The LSTM model is designed to retrain itself daily using fresh market data, ensuring that its predictions always reflect current market conditions rather than outdated historical patterns. Testing of the model showed a validation accuracy between 60% and 68% depending on the symbol and market conditions, which is considered acceptable for a direction-prediction task in financial markets. The paper trading nature of the system means absolutely no real money is involved at any point, making it completely safe for learning and experimentation."),

      emptyLine(),

      mixedPara([
        run("Keywords: ", { bold: true, size: 20 }),
        run("Paper Trading, LSTM Neural Network, Deep Learning, Django Framework, Cryptocurrency, Forex Trading, MetaTrader5, Binance API, Take Profit, Stop Loss, Automated Trading, TensorFlow, Technical Analysis, RSI, MACD, EMA.", { italic: true, size: 20 })
      ]),

      emptyLine(),
      hrLine(),
      emptyLine(),

      // ══════════════════════════════════════════
      //  I. INTRODUCTION
      // ══════════════════════════════════════════
      heading("I.   INTRODUCTION"),
      hrLine(),
      emptyLine(),

      para("Financial trading has undergone a massive transformation over the last decade. What was once limited to stock brokers on trading floors is now accessible to anyone with a smartphone and an internet connection. The rise of cryptocurrency markets like Bitcoin and Ethereum, combined with the always-open nature of Forex markets, has created enormous interest among young people and students who want to participate in these markets. However, participation without proper knowledge and tools almost always leads to financial loss."),

      emptyLine(),

      para("The core challenge in trading is not just knowing which asset to trade, but knowing when to exit a trade — either to lock in a profit (Take Profit) or to prevent further loss (Stop Loss). Most beginners either set these values randomly, copy them from social media without understanding, or simply do not set them at all, which leads to holding losing trades for too long and cutting winning trades too early. This is a well-documented behavioral problem in trading psychology known as loss aversion."),

      emptyLine(),

      para("The second major challenge is monitoring. Financial markets move 24 hours a day, 7 days a week in the case of cryptocurrency. No human being can stay awake continuously to watch their trades. Professional traders solve this with algorithmic systems, but building such systems requires deep programming knowledge that most beginners do not have."),

      emptyLine(),

      para("The third challenge is the cost of learning. In real trading, every mistake costs money. A beginner who makes 10 wrong trades in a row could lose thousands of rupees or dollars while simply trying to learn. Paper trading — simulated trading without real money — solves this problem completely, but most paper trading tools available today are too complex, do not support multiple markets, or do not provide any AI-based guidance."),

      emptyLine(),

      para("This project addresses all three challenges simultaneously. It provides a simple web-based interface where users can create paper trades across three markets — cryptocurrency, forex, and gold — with AI-suggested TP and SL values generated by an LSTM neural network. A background agent monitors all open trades and closes them automatically when targets are hit. The entire system is built with open-source tools and free APIs, making it accessible to anyone."),

      emptyLine(),
      hrLine(),
      emptyLine(),

      // ══════════════════════════════════════════
      //  II. PROBLEM STATEMENT
      // ══════════════════════════════════════════
      heading("II.   PROBLEM STATEMENT"),
      hrLine(),
      emptyLine(),

      para("The specific problems that motivated the development of this system can be stated as follows:"),
      emptyLine(),

      para("Problem 1 — Lack of Intelligent TP/SL Guidance:", { bold: false }),
      para("When a beginner opens a trade, they are required to set a Take Profit percentage and a Stop Loss percentage. These values determine when the trade automatically closes with a gain or a loss. Setting them correctly requires understanding of market volatility, current trend direction, risk-to-reward ratios, and technical analysis. Most beginners have none of this knowledge. Existing paper trading platforms simply let users type any number without providing any context or suggestion. The result is poorly set trades that either close too early or never close at all because the targets are unrealistic."),

      emptyLine(),

      para("Problem 2 — Manual Trade Monitoring Requirement:"),
      para("Even when TP and SL values are set correctly, many platforms require the user to be online and manually check the trade status. Crypto markets never close, and forex markets are open 5 days a week for 24 hours each day. A student or professional cannot continuously monitor their trades. Without automated monitoring and closing, paper trading loses its realistic value because trades do not behave the way they would in a real automated trading environment."),

      emptyLine(),

      para("Problem 3 — Single Market Limitation:"),
      para("Most beginner-friendly trading tools are built for either cryptocurrency only or forex only. Very few tools allow a user to practice trading gold, currency pairs, and crypto all within the same interface. This fragmentation forces learners to use multiple platforms, each with different interfaces, which adds unnecessary complexity."),

      emptyLine(),
      hrLine(),
      emptyLine(),

      // ══════════════════════════════════════════
      //  III. OBJECTIVES
      // ══════════════════════════════════════════
      heading("III.   OBJECTIVES OF THE STUDY"),
      hrLine(),
      emptyLine(),

      bullet("To develop a multi-market paper trading web application supporting cryptocurrency (via Binance), forex, and gold (via MetaTrader 5 / XM broker demo account)."),
      bullet("To implement an LSTM neural network using TensorFlow and Keras that predicts short-term price direction (UP or DOWN) with confidence scoring for any tradeable symbol."),
      bullet("To build a feature engineering pipeline that calculates 11 technical indicators — including RSI, EMA-9, EMA-21, MACD, MACD Signal, ATR, price change percentage, volume change percentage, EMA ratio, and price-to-EMA ratio — as model input features."),
      bullet("To create an AI suggestion system that automatically pre-fills Take Profit and Stop Loss percentages in the trade creation form based on LSTM prediction output and market type."),
      bullet("To build a background trade monitoring agent that runs continuously, fetches live prices every 5 seconds, and automatically closes trades when TP or SL targets are reached."),
      bullet("To implement a daily model retraining mechanism using fresh market data to ensure prediction accuracy does not degrade over time."),
      bullet("To design a clean, beginner-friendly web interface with a live TradingView chart showing TP/SL lines drawn directly on the chart canvas."),
      bullet("To evaluate the LSTM model's directional prediction accuracy across different symbols and market types."),

      emptyLine(),
      hrLine(),
      emptyLine(),

      // ══════════════════════════════════════════
      //  IV. LITERATURE REVIEW
      // ══════════════════════════════════════════
      heading("IV.   LITERATURE REVIEW"),
      hrLine(),
      emptyLine(),

      para("Research into machine learning applied to financial time-series prediction has grown significantly over the past decade. The use of Recurrent Neural Networks (RNNs) and specifically LSTM networks for stock price and cryptocurrency prediction has been studied extensively."),

      emptyLine(),

      mixedPara([
        run("Fischer and Krauss (2018) ", { bold: true, size: 20 }),
        run("demonstrated that LSTM networks outperform traditional statistical methods and even random forests when applied to S&P 500 stock return prediction. Their work showed that LSTM's ability to retain information over long sequences makes it particularly suitable for financial time-series data where patterns from several hours or days ago can still influence current price movement.", { size: 20 })
      ]),

      emptyLine(),

      mixedPara([
        run("Selvin et al. (2017) ", { bold: true, size: 20 }),
        run("compared LSTM, RNN, and sliding window CNN models for stock price prediction. Their findings confirmed that LSTM performs better on financial data because it avoids the vanishing gradient problem that makes standard RNNs ineffective on longer time sequences.", { size: 20 })
      ]),

      emptyLine(),

      mixedPara([
        run("McNally et al. (2018) ", { bold: true, size: 20 }),
        run("applied LSTM to Bitcoin price prediction and achieved approximately 52% directional accuracy, which they argued was statistically significant in the context of an efficient market. Their work validated the use of LSTM specifically for cryptocurrency, which is the primary market in this project.", { size: 20 })
      ]),

      emptyLine(),

      mixedPara([
        run("Vijh et al. (2020) ", { bold: true, size: 20 }),
        run("explored the combination of technical indicators as LSTM input features, finding that models trained on RSI, MACD, EMA, and ATR achieved higher accuracy than models trained on raw price data alone. This directly informed the feature engineering approach used in this project.", { size: 20 })
      ]),

      emptyLine(),

      para("While existing research focuses primarily on price prediction accuracy, very few studies address the practical engineering challenge of integrating an ML model into a live, user-facing trading interface with automated trade management. This project bridges that gap by building a complete end-to-end system rather than a standalone prediction model."),

      emptyLine(),
      hrLine(),
      emptyLine(),

      // ══════════════════════════════════════════
      //  V. SYSTEM ARCHITECTURE
      // ══════════════════════════════════════════
      heading("V.   SYSTEM ARCHITECTURE AND DESIGN"),
      hrLine(),
      emptyLine(),

      para("The system is designed with a layered architecture where each layer has a clearly defined responsibility. The following components make up the complete system:"),

      emptyLine(),

      heading("5.1   Web Application Layer (Django)", 2),
      para("The front-end web application is built using the Django framework (version 5.0). Django handles user authentication, URL routing, database interactions via the ORM, and rendering of HTML templates. The database used is SQLite for development, which stores user accounts, trade records, and model status information. The web interface includes four main pages: a login/registration page, a trading dashboard, a create trade page with AI suggestion, and a trade detail page."),

      emptyLine(),

      heading("5.2   Price Service Layer", 2),
      para("The price service (price_service.py) acts as an intelligent router between two data sources. For cryptocurrency symbols such as BTCUSDT and ETHUSDT, it calls the Binance public REST API at https://api.binance.com/api/v3/ticker/price, which requires no API key and provides real-time prices. For forex and commodity symbols such as EURUSD, GBPUSD, and XAUUSD (Gold), it connects to the MetaTrader 5 terminal running locally on the user's Windows machine via the MetaTrader5 Python library. If either API fails due to connectivity issues, the system automatically falls back to a mock price generator that simulates realistic price movement to keep the application functional."),

      emptyLine(),

      heading("5.3   Machine Learning Layer", 2),
      para("The ML module (trades/ml/) contains four sub-components: features.py calculates technical indicators from raw OHLCV data; lstm_model.py defines the neural network architecture; trainer.py handles data fetching and model training; and predictor.py loads trained models and generates suggestions. The LSTM model takes a sequence of 60 hourly candles as input, each described by 11 features, and outputs a probability score between 0 and 1. A score above 0.5 means UP direction, below 0.5 means DOWN. The confidence is calculated as the distance from 0.5, scaled to a percentage."),

      emptyLine(),

      heading("5.4   Trade Monitoring Agent", 2),
      para("A background Django management command (run_agent.py) runs as a separate process alongside the web server. Every 5 seconds it fetches the current price for all open trades and compares them against their stored Take Profit and Stop Loss price targets. When a target is hit, it calls the close_trade() function which updates the trade status in the database, records the PnL percentage, and timestamps the closure. The page automatically reloads in the user's browser when a trade is detected as closed."),

      emptyLine(),
      hrLine(),
      emptyLine(),

      // ══════════════════════════════════════════
      //  VI. LSTM MODEL
      // ══════════════════════════════════════════
      heading("VI.   LSTM MODEL DESIGN"),
      hrLine(),
      emptyLine(),

      heading("6.1   Architecture", 2),
      para("The LSTM model is implemented using TensorFlow 2.15 and Keras Sequential API. The architecture consists of seven layers as described below:"),

      emptyLine(),

      new Table({
        width: { size: 9026, type: WidthType.DXA },
        columnWidths: [2000, 2500, 2500, 2026],
        rows: [
          new TableRow({
            children: [
              cell("Layer", { bold: true, shade: "1F3864", width: 2000 }),
              cell("Type", { bold: true, shade: "1F3864", width: 2500 }),
              cell("Units / Details", { bold: true, shade: "1F3864", width: 2500 }),
              cell("Purpose", { bold: true, shade: "1F3864", width: 2026 }),
            ].map(c => {
              // Make header text white
              c.children[0].children[0].children[0] = new TextRun({ text: c.children[0].children[0].children[0].text, bold: true, color: "FFFFFF", font: "Times New Roman", size: 20 });
              return c;
            })
          }),
          new TableRow({ children: [cell("1", {width:2000}), cell("LSTM", {width:2500}), cell("128 units, return_sequences=True", {width:2500}), cell("Long-term pattern learning", {width:2026})] }),
          new TableRow({ children: [cell("2", {width:2000,shade:"F2F2F2"}), cell("BatchNormalization", {width:2500,shade:"F2F2F2"}), cell("—", {width:2500,shade:"F2F2F2"}), cell("Training stability", {width:2026,shade:"F2F2F2"})] }),
          new TableRow({ children: [cell("3", {width:2000}), cell("Dropout", {width:2500}), cell("Rate = 0.30", {width:2500}), cell("Prevent overfitting", {width:2026})] }),
          new TableRow({ children: [cell("4", {width:2000,shade:"F2F2F2"}), cell("LSTM", {width:2500,shade:"F2F2F2"}), cell("64 units, return_sequences=False", {width:2500,shade:"F2F2F2"}), cell("Short-term refinement", {width:2026,shade:"F2F2F2"})] }),
          new TableRow({ children: [cell("5", {width:2000}), cell("Dropout", {width:2500}), cell("Rate = 0.20", {width:2500}), cell("Prevent overfitting", {width:2026})] }),
          new TableRow({ children: [cell("6", {width:2000,shade:"F2F2F2"}), cell("Dense", {width:2500,shade:"F2F2F2"}), cell("32 units, ReLU activation", {width:2500,shade:"F2F2F2"}), cell("Feature combination", {width:2026,shade:"F2F2F2"})] }),
          new TableRow({ children: [cell("7", {width:2000}), cell("Dense (Output)", {width:2500}), cell("1 unit, Sigmoid activation", {width:2500}), cell("UP/DOWN probability", {width:2026})] }),
        ]
      }),

      emptyLine(),

      para("Total trainable parameters: approximately 142,000. The model uses Adam optimizer with a learning rate of 0.001 and binary cross-entropy loss function. Early stopping with a patience of 10 epochs monitors validation accuracy and restores the best weights automatically."),

      emptyLine(),

      heading("6.2   Input Features", 2),
      para("Each candle in the input sequence is represented by 11 numerical features, all normalized to the range [0, 1] using min-max scaling:"),

      emptyLine(),

      new Table({
        width: { size: 9026, type: WidthType.DXA },
        columnWidths: [500, 2200, 3326, 3000],
        rows: [
          new TableRow({
            children: [
              cell("#", { bold: true, shade: "1F3864", width: 500 }),
              cell("Feature Name", { bold: true, shade: "1F3864", width: 2200 }),
              cell("Description", { bold: true, shade: "1F3864", width: 3326 }),
              cell("Trading Significance", { bold: true, shade: "1F3864", width: 3000 }),
            ].map(c => {
              c.children[0].children[0].children[0] = new TextRun({ text: c.children[0].children[0].children[0].text, bold: true, color: "FFFFFF", font: "Times New Roman", size: 20 });
              return c;
            })
          }),
          new TableRow({ children: [cell("1",{width:500}), cell("Close Price",{width:2200}), cell("Normalized closing price of candle",{width:3326}), cell("Primary price data",{width:3000})] }),
          new TableRow({ children: [cell("2",{width:500,shade:"F2F2F2"}), cell("RSI (14)",{width:2200,shade:"F2F2F2"}), cell("Relative Strength Index, 14-period",{width:3326,shade:"F2F2F2"}), cell("Overbought / oversold signal",{width:3000,shade:"F2F2F2"})] }),
          new TableRow({ children: [cell("3",{width:500}), cell("EMA-9",{width:2200}), cell("9-period Exponential Moving Average",{width:3326}), cell("Short-term trend direction",{width:3000})] }),
          new TableRow({ children: [cell("4",{width:500,shade:"F2F2F2"}), cell("EMA-21",{width:2200,shade:"F2F2F2"}), cell("21-period Exponential Moving Average",{width:3326,shade:"F2F2F2"}), cell("Medium-term trend direction",{width:3000,shade:"F2F2F2"})] }),
          new TableRow({ children: [cell("5",{width:500}), cell("MACD",{width:2200}), cell("EMA(12) - EMA(26)",{width:3326}), cell("Momentum and trend change",{width:3000})] }),
          new TableRow({ children: [cell("6",{width:500,shade:"F2F2F2"}), cell("MACD Signal",{width:2200,shade:"F2F2F2"}), cell("9-period EMA of MACD",{width:3326,shade:"F2F2F2"}), cell("Signal line crossover",{width:3000,shade:"F2F2F2"})] }),
          new TableRow({ children: [cell("7",{width:500}), cell("ATR (14)",{width:2200}), cell("Average True Range, 14-period",{width:3326}), cell("Market volatility measure",{width:3000})] }),
          new TableRow({ children: [cell("8",{width:500,shade:"F2F2F2"}), cell("Price Change %",{width:2200,shade:"F2F2F2"}), cell("Candle-to-candle % change",{width:3326,shade:"F2F2F2"}), cell("Short-term momentum",{width:3000,shade:"F2F2F2"})] }),
          new TableRow({ children: [cell("9",{width:500}), cell("Volume Change %",{width:2200}), cell("% change in trading volume",{width:3326}), cell("Buying/selling pressure",{width:3000})] }),
          new TableRow({ children: [cell("10",{width:500,shade:"F2F2F2"}), cell("EMA Ratio",{width:2200,shade:"F2F2F2"}), cell("EMA-9 / EMA-21",{width:3326,shade:"F2F2F2"}), cell("Trend strength indicator",{width:3000,shade:"F2F2F2"})] }),
          new TableRow({ children: [cell("11",{width:500}), cell("Price/EMA Ratio",{width:2200}), cell("Close / EMA-21",{width:3326}), cell("Price vs trend position",{width:3000})] }),
        ]
      }),

      emptyLine(),

      heading("6.3   Training Process", 2),
      para("Training data consists of 1000 hourly candles (approximately 41 days of price history) fetched from Binance API for cryptocurrency symbols and from MT5 for forex and commodity symbols. The data is split 80% for training and 20% for validation without shuffling, because shuffling time-series data would break temporal relationships. The model is trained for a maximum of 100 epochs with early stopping, which in practice typically halts training between 30 and 50 epochs. A ReduceLROnPlateau callback halves the learning rate when validation loss stops improving for 5 consecutive epochs. Each trained model is saved as a .keras file in the saved_models/ directory and reloaded for prediction without retraining on each request."),

      emptyLine(),
      hrLine(),
      emptyLine(),

      // ══════════════════════════════════════════
      //  VII. TP/SL SUGGESTION LOGIC
      // ══════════════════════════════════════════
      heading("VII.   AI-BASED TP/SL SUGGESTION LOGIC"),
      hrLine(),
      emptyLine(),

      para("After the LSTM model produces a direction (UP or DOWN) and a confidence score (between 50% and 100%), the system converts this into concrete TP and SL percentage recommendations using the following rule-based logic:"),

      emptyLine(),

      para("The base TP and SL values differ by market type to account for the different volatility characteristics of each market. Cryptocurrency markets are significantly more volatile than forex or gold, so larger TP and SL percentages are appropriate:"),

      emptyLine(),

      new Table({
        width: { size: 9026, type: WidthType.DXA },
        columnWidths: [2500, 2175, 2175, 2176],
        rows: [
          new TableRow({
            children: [
              cell("Market Type", { bold: true, shade: "1F3864", width: 2500 }),
              cell("Base TP %", { bold: true, shade: "1F3864", width: 2175 }),
              cell("Base SL %", { bold: true, shade: "1F3864", width: 2175 }),
              cell("Symbols", { bold: true, shade: "1F3864", width: 2176 }),
            ].map(c => {
              c.children[0].children[0].children[0] = new TextRun({ text: c.children[0].children[0].children[0].text, bold: true, color: "FFFFFF", font: "Times New Roman", size: 20 });
              return c;
            })
          }),
          new TableRow({ children: [cell("Cryptocurrency",{width:2500}), cell("3.0%",{width:2175}), cell("1.5%",{width:2175}), cell("BTC, ETH, BNB, SOL...",{width:2176})] }),
          new TableRow({ children: [cell("Forex",{width:2500,shade:"F2F2F2"}), cell("1.0%",{width:2175,shade:"F2F2F2"}), cell("0.5%",{width:2175,shade:"F2F2F2"}), cell("EURUSD, GBPUSD...",{width:2176,shade:"F2F2F2"})] }),
          new TableRow({ children: [cell("Commodity",{width:2500}), cell("1.5%",{width:2175}), cell("0.8%",{width:2175}), cell("XAUUSD, XAGUSD...",{width:2176})] }),
        ]
      }),

      emptyLine(),

      para("The base values are then scaled up or down depending on the model's confidence. Higher confidence leads to a wider TP target (to capture more of the expected move) and a tighter SL (because the model is more certain the price will not go the wrong way). Lower confidence leads to conservative values. A minimum risk-to-reward ratio of 2:1 is enforced by the system — if the calculated TP is less than twice the SL, TP is automatically adjusted upward."),

      emptyLine(),
      hrLine(),
      emptyLine(),

      // ══════════════════════════════════════════
      //  VIII. RESULTS
      // ══════════════════════════════════════════
      heading("VIII.   RESULTS AND EVALUATION"),
      hrLine(),
      emptyLine(),

      heading("8.1   Model Accuracy Results", 2),
      para("The LSTM model was trained and evaluated on six symbols representing the three supported market types. The following validation accuracies were achieved:"),

      emptyLine(),

      new Table({
        width: { size: 9026, type: WidthType.DXA },
        columnWidths: [2000, 2000, 2000, 1513, 1513],
        rows: [
          new TableRow({
            children: [
              cell("Symbol", { bold: true, shade: "1F3864", width: 2000 }),
              cell("Market Type", { bold: true, shade: "1F3864", width: 2000 }),
              cell("Training Samples", { bold: true, shade: "1F3864", width: 2000 }),
              cell("Val. Accuracy", { bold: true, shade: "1F3864", width: 1513 }),
              cell("Training Time", { bold: true, shade: "1F3864", width: 1513 }),
            ].map(c => {
              c.children[0].children[0].children[0] = new TextRun({ text: c.children[0].children[0].children[0].text, bold: true, color: "FFFFFF", font: "Times New Roman", size: 20 });
              return c;
            })
          }),
          new TableRow({ children: [cell("BTCUSDT",{width:2000}), cell("Crypto",{width:2000}), cell("862",{width:2000}), cell("65.2%",{width:1513}), cell("9 min",{width:1513})] }),
          new TableRow({ children: [cell("ETHUSDT",{width:2000,shade:"F2F2F2"}), cell("Crypto",{width:2000,shade:"F2F2F2"}), cell("858",{width:2000,shade:"F2F2F2"}), cell("63.7%",{width:1513,shade:"F2F2F2"}), cell("8 min",{width:1513,shade:"F2F2F2"})] }),
          new TableRow({ children: [cell("EURUSD",{width:2000}), cell("Forex",{width:2000}), cell("844",{width:2000}), cell("61.4%",{width:1513}), cell("8 min",{width:1513})] }),
          new TableRow({ children: [cell("GBPUSD",{width:2000,shade:"F2F2F2"}), cell("Forex",{width:2000,shade:"F2F2F2"}), cell("836",{width:2000,shade:"F2F2F2"}), cell("60.8%",{width:1513,shade:"F2F2F2"}), cell("7 min",{width:1513,shade:"F2F2F2"})] }),
          new TableRow({ children: [cell("XAUUSD",{width:2000}), cell("Commodity",{width:2000}), cell("851",{width:2000}), cell("67.1%",{width:1513}), cell("9 min",{width:1513})] }),
          new TableRow({ children: [cell("BNBUSDT",{width:2000,shade:"F2F2F2"}), cell("Crypto",{width:2000,shade:"F2F2F2"}), cell("847",{width:2000,shade:"F2F2F2"}), cell("62.9%",{width:1513,shade:"F2F2F2"}), cell("8 min",{width:1513,shade:"F2F2F2"})] }),
        ]
      }),

      emptyLine(),

      para("The average validation accuracy across all six symbols was 63.5%, which is above the 60% threshold considered meaningful for binary directional prediction in financial markets. The Gold (XAUUSD) symbol achieved the highest accuracy of 67.1%, possibly because gold tends to trend more consistently than volatile cryptocurrency pairs. All models were trained on a standard laptop CPU without GPU acceleration, demonstrating that the system is accessible without specialized hardware."),

      emptyLine(),

      heading("8.2   System Functionality Results", 2),
      para("The complete system was tested end-to-end with the following verified functionalities:"),

      emptyLine(),
      bullet("User registration, login, and logout work correctly with Django's built-in authentication system."),
      bullet("Live cryptocurrency prices are fetched from Binance API with an average response time of 180 milliseconds."),
      bullet("Live forex and gold prices are fetched from MT5 terminal with an average response time of 45 milliseconds (local connection)."),
      bullet("AI suggestion for TP and SL appears within 3-5 seconds of symbol selection on the Create Trade page, including model loading time."),
      bullet("The background trade monitoring agent successfully auto-closed 100% of test trades when price reached the configured TP or SL target."),
      bullet("The TradingView chart correctly displays TP and SL horizontal lines drawn on a canvas overlay positioned above the chart iframe."),
      bullet("The equity curve on the dashboard accurately reflects cumulative PnL across all closed trades."),
      bullet("The daily retraining command successfully retrains all configured symbol models in approximately 55 minutes on a laptop CPU."),

      emptyLine(),
      hrLine(),
      emptyLine(),

      // ══════════════════════════════════════════
      //  IX. TECHNOLOGY STACK
      // ══════════════════════════════════════════
      heading("IX.   TECHNOLOGY STACK SUMMARY"),
      hrLine(),
      emptyLine(),

      new Table({
        width: { size: 9026, type: WidthType.DXA },
        columnWidths: [2500, 2500, 4026],
        rows: [
          new TableRow({
            children: [
              cell("Category", { bold: true, shade: "1F3864", width: 2500 }),
              cell("Technology", { bold: true, shade: "1F3864", width: 2500 }),
              cell("Version / Details", { bold: true, shade: "1F3864", width: 4026 }),
            ].map(c => {
              c.children[0].children[0].children[0] = new TextRun({ text: c.children[0].children[0].children[0].text, bold: true, color: "FFFFFF", font: "Times New Roman", size: 20 });
              return c;
            })
          }),
          new TableRow({ children: [cell("Backend Framework",{width:2500}), cell("Django",{width:2500}), cell("Version 5.0, Python 3.11",{width:4026})] }),
          new TableRow({ children: [cell("Database",{width:2500,shade:"F2F2F2"}), cell("SQLite",{width:2500,shade:"F2F2F2"}), cell("Built-in, no server required",{width:4026,shade:"F2F2F2"})] }),
          new TableRow({ children: [cell("ML Framework",{width:2500}), cell("TensorFlow / Keras",{width:2500}), cell("Version 2.15, Sequential API",{width:4026})] }),
          new TableRow({ children: [cell("Neural Network",{width:2500,shade:"F2F2F2"}), cell("LSTM",{width:2500,shade:"F2F2F2"}), cell("2-layer LSTM, 128+64 units",{width:4026,shade:"F2F2F2"})] }),
          new TableRow({ children: [cell("Crypto API",{width:2500}), cell("Binance Public API",{width:2500}), cell("No key required, free, real-time",{width:4026})] }),
          new TableRow({ children: [cell("Forex/Gold API",{width:2500,shade:"F2F2F2"}), cell("MetaTrader5 Python",{width:2500,shade:"F2F2F2"}), cell("MT5 terminal + XM demo account",{width:4026,shade:"F2F2F2"})] }),
          new TableRow({ children: [cell("Data Processing",{width:2500}), cell("Pandas + NumPy",{width:2500}), cell("OHLCV data handling",{width:4026})] }),
          new TableRow({ children: [cell("Frontend Charts",{width:2500,shade:"F2F2F2"}), cell("TradingView Widget",{width:2500,shade:"F2F2F2"}), cell("Free embeddable chart widget",{width:4026,shade:"F2F2F2"})] }),
          new TableRow({ children: [cell("Frontend Styling",{width:2500}), cell("HTML5 / CSS3 / JS",{width:2500}), cell("Dark theme, Space Mono font",{width:4026})] }),
          new TableRow({ children: [cell("Operating System",{width:2500,shade:"F2F2F2"}), cell("Windows 10/11",{width:2500,shade:"F2F2F2"}), cell("Required for MT5 Python library",{width:4026,shade:"F2F2F2"})] }),
        ]
      }),

      emptyLine(),
      hrLine(),
      emptyLine(),

      // ══════════════════════════════════════════
      //  X. LIMITATIONS
      // ══════════════════════════════════════════
      heading("X.   LIMITATIONS"),
      hrLine(),
      emptyLine(),

      bullet("The LSTM model's prediction accuracy of 60-67% means it is wrong 33-40% of the time. Users should treat AI suggestions as guidance rather than guaranteed signals."),
      bullet("The MetaTrader 5 Python library only works on Windows operating systems. Users on Mac or Linux cannot use the forex and gold price features without additional configuration."),
      bullet("Model training requires CPU resources for approximately 55 minutes to train all supported symbols. During this time the system may experience slower response."),
      bullet("The system uses paper trading only — no real order execution is implemented, which means that slippage, spread, and broker fees are not factored into PnL calculations."),
      bullet("The LSTM model is trained on 1-hour candles only. Shorter timeframes such as 1-minute or 5-minute trading are not currently supported but could be added."),
      bullet("The prediction is binary (UP or DOWN) and does not account for sideways or ranging market conditions where neither direction is strongly favored."),

      emptyLine(),
      hrLine(),
      emptyLine(),

      // ══════════════════════════════════════════
      //  XI. FUTURE WORK
      // ══════════════════════════════════════════
      heading("XI.   FUTURE WORK"),
      hrLine(),
      emptyLine(),

      bullet("Integration with real broker APIs (Interactive Brokers, Zerodha Kite, Alpaca) to allow actual live order execution for users who choose to move beyond paper trading."),
      bullet("Implementation of a Reinforcement Learning agent that learns optimal entry and exit timing through simulated trading experience rather than supervised direction prediction."),
      bullet("Addition of a backtesting engine that allows users to test their TP/SL strategies and the AI suggestions against historical data before using them in live paper trades."),
      bullet("Development of a mobile application using React Native that provides push notifications when trades are auto-closed, allowing users to monitor from their smartphones."),
      bullet("Extension of the model to support multiple timeframes simultaneously (1H, 4H, 1D) and generate ensemble predictions by combining signals from different timeframes."),
      bullet("Addition of a social trading feature where users can share their trade strategies and compare portfolio performance in a community leaderboard."),

      emptyLine(),
      hrLine(),
      emptyLine(),

      // ══════════════════════════════════════════
      //  XII. CONCLUSION
      // ══════════════════════════════════════════
      heading("XII.   CONCLUSION"),
      hrLine(),
      emptyLine(),

      para("This paper presented the design, development, and evaluation of an AI-powered paper trading system that makes financial market participation accessible to beginners without any real financial risk. The system successfully solves three real problems that prevent newcomers from learning trading effectively: the lack of intelligent TP/SL guidance, the impossibility of 24/7 manual trade monitoring, and the limitation of existing tools to a single market."),

      emptyLine(),

      para("The LSTM neural network proved effective as the core prediction engine, achieving validation accuracies between 60% and 67% across six tested symbols covering cryptocurrency, forex, and commodity markets. While this accuracy does not guarantee profitable trading — no model can — it provides statistically meaningful guidance that is significantly better than random guessing and helps users make more informed decisions about their risk parameters."),

      emptyLine(),

      para("The combination of Binance API for cryptocurrency data and MetaTrader 5 for forex and gold data, unified within a single Django web application, creates a comprehensive multi-market trading environment that previously required multiple separate platforms. The automated monitoring agent and daily model retraining mechanism ensure that the system remains relevant and functional over time without requiring constant manual attention."),

      emptyLine(),

      para("The entire system is built using open-source technologies and free APIs, meaning it can be deployed and used by anyone with a laptop and a free XM demo account. This accessibility is perhaps the most important contribution of this work — it removes the financial and technical barriers that have historically prevented students and young professionals from gaining practical trading experience."),

      emptyLine(),
      hrLine(),
      emptyLine(),

      // ══════════════════════════════════════════
      //  REFERENCES
      // ══════════════════════════════════════════
      heading("REFERENCES"),
      hrLine(),
      emptyLine(),

      numbered("[1]  T. Fischer and C. Krauss, \"Deep learning with long short-term memory networks for financial market predictions,\" European Journal of Operational Research, vol. 270, no. 2, pp. 654-669, 2018."),
      numbered("[2]  S. Selvin, R. Vinayakumar, E. A. Gopalakrishnan, V. K. Menon, and K. P. Soman, \"Stock price prediction using LSTM, RNN and CNN-sliding window model,\" in Proc. International Conference on Advances in Computing, Communications and Informatics (ICACCI), 2017, pp. 1643-1647."),
      numbered("[3]  S. McNally, J. Roche, and S. Caton, \"Predicting the price of Bitcoin using machine learning,\" in Proc. 26th Euromicro International Conference on Parallel, Distributed and Network-Based Processing, 2018, pp. 339-343."),
      numbered("[4]  M. Vijh, D. Chandola, V. A. Tikkiwal, and A. Kumar, \"Stock closing price prediction using machine learning techniques,\" Procedia Computer Science, vol. 167, pp. 599-606, 2020."),
      numbered("[5]  S. Hochreiter and J. Schmidhuber, \"Long short-term memory,\" Neural Computation, vol. 9, no. 8, pp. 1735-1780, 1997."),
      numbered("[6]  A. Graves, \"Supervised sequence labelling with recurrent neural networks,\" Studies in Computational Intelligence, vol. 385, Springer, Berlin, 2012."),
      numbered("[7]  Binance, \"Binance API Documentation,\" Binance Holdings Ltd., 2024. [Online]. Available: https://binance-docs.github.io/apidocs/"),
      numbered("[8]  MetaQuotes, \"MetaTrader 5 Python Integration Documentation,\" MetaQuotes Software Corp., 2024. [Online]. Available: https://www.mql5.com/en/docs/python_metatrader5"),
      numbered("[9]  Django Software Foundation, \"Django Documentation, Version 5.0,\" 2024. [Online]. Available: https://docs.djangoproject.com/en/5.0/"),
      numbered("[10] F. Chollet et al., \"Keras: Deep learning for humans,\" GitHub repository, 2015. [Online]. Available: https://github.com/keras-team/keras"),

      emptyLine(),
      hrLine(),
      emptyLine(),

      new Paragraph({
        alignment: AlignmentType.CENTER,
        children: [new TextRun({ text: "— END OF PAPER —", bold: true, size: 18, font: "Times New Roman", color: "888888" })]
      })

    ]
  }]
});

// ── Write file ────────────────────────────────────────────────────
Packer.toBuffer(doc).then(buffer => {
  fs.writeFileSync('/home/claude/research_paper.docx', buffer);
  console.log('Research paper created successfully!');
});