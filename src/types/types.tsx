export interface Article{
    source: {
    id: number,
    name: string
    },
    author: string,
    title: string,
    description: string,
    url: string,
    urlToImage: string,
    publishedAt: string,
    content: string
}
export interface Articles{
    status: string,
    totalResults: number,
    articles: Article[],
}
export interface Stock{
    ask: number,
    askSize: number,
    averageAnalystRating: string,
    averageDailyVolume3Month: number,
    averageDailyVolume10Day: number,
    bid: number,
    bidSize: number,
    bookValue: number,
    currency: string,
    customPriceAlertConfidence: string,
    displayName: string,
    dividendDate: number,
    earningsTimestamp: number,
    earningsTimestampEnd: number,
    earningsTimestampStart: number,
    epsCurrentYear: number,
    epsForward: number,
    epsTrailingTwelveMonths: number,
    esgPopulated: boolean,
    exchange:string,
    exchangeDataDelayedBy: number,
    exchangeTimezoneName: string,
    exchangeTimezoneShortName: string,
    fiftyDayAverage: number,
    fiftyDayAverageChange: number,
    fiftyDayAverageChangePercent: number,
    fiftyTwoWeekHigh: number,
    fiftyTwoWeekHighChange:number,
    fiftyTwoWeekHighChangePercent: number,
    fiftyTwoWeekLow: number,
    fiftyTwoWeekLowChange: number,
    fiftyTwoWeekLowChangePercent: number,
    fiftyTwoWeekRange: string,
    financialCurrency: string,
    firstTradeDateMilliseconds: number,
    forwardPE: number,
    fullExchangeName: string,
    gmtOffSetMilliseconds: number,
    language: string,
    longName: string,
    market: string,
    marketCap: number,
    marketState: string,
    messageBoardId: string,
    pageViewGrowthWeekly: number,
    postMarketChange:number,
    postMarketChangePercent: number,
    postMarketPrice:number,
    postMarketTime: number,
    priceEpsCurrentYear: number,
    priceHint: number,
    priceToBook:number,
    quoteSourceName: string,
    quoteType: string,
    region:string,
    regularMarketChange: number,
    regularMarketChangePercent: number,
    regularMarketDayHigh:number,
    regularMarketDayLow: number,
    regularMarketDayRange: string,
    regularMarketOpen: number,
    regularMarketPreviousClose: number,
    regularMarketPrice: number,
    regularMarketTime: number,
    regularMarketVolume: number,
    sharesOutstanding: number,
    shortName: string,
    sourceInterval: number,
    symbol: string,
    tradeable: number,
    trailingAnnualDividendRate: number,
    trailingAnnualDividendYield:number,
    trailingPE: number,
    triggerable: boolean,
    twoHundredDayAverage: number,
    twoHundredDayAverageChange: number,
    twoHundredDayAverageChangePercent: number,
    typeDisp: string,
}
export interface Weather{
    address: string,
    alerts: any,
    currentConditions: any,
    days: Day[],
    description: string,
    latitude: number,
    longitude: number,
    queryCost: number,
    resolvedAddress: string,
    stations: any,
    timezone: string,
    tzoffset: number
}
export interface Day{
    cloudcover: number,
    conditions: string,
    datetime: string,
    datetimeEpoch: number,
    description: string,
    dew: number,
    feelslike:number,
    feelslikemax: number,
    feelslikemin: number,
    hours: any,
    humidity: number,
    icon: string,
    moonphase: number,
    precip: number,
    precipcover: any,
    precipprob: number,
    preciptype: any,
    pressure: number,
    severerisk: number,
    snow: number,
    snowdepth: number
    solarenergy:number,
    solarradiation: number
    source: string,
    stations: any,
    sunrise: string,
    sunriseEpoch: number,
    sunset: string,
    sunsetEpoch: number,
    temp: number,
    tempmax: number,
    tempmin: number
    uvindex: number,
    visibility: number,
    winddir: number,
    windgust: number,
    windspeed: number,
}
