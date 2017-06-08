import { InMemoryDbService } from 'angular-in-memory-web-api';
export class InMemoryDataService implements InMemoryDbService {
  createDb() {
    let heroes = [
      // {id: 11, name: 'Mr. Nice'},
      // {id: 12, name: 'Narco'},
      // {id: 13, name: 'Bombasto'},
      // {id: 14, name: 'Celeritas'},
      // {id: 15, name: 'Magneta'},
      // {id: 16, name: 'RubberMan'},
      // {id: 17, name: 'Dynama'},
      // {id: 18, name: 'Dr IQ'},
      // {id: 19, name: 'Magma'},
      // {id: 20, name: 'Tornado'}
      {
        "sch:MNBResponse" : {
          "@xmlns:sch" : "http://mnb.hitrust.com/service/schema",
          "sch:resHeader" : {
            "sch:requestNo" : "1481860700840-fh000105",
            "sch:requestTime" : "2016-12-13T18:27:40.500+08:00",
            "sch:responseTime" : "2016-12-13T18:27:40.671+08:00",
            "sch:custId" : ""
          },
          "sch:result" : {
            "@xsi:type" : "f40:f4000103ResultType",
            "@xmlns:fh0" : "http://mnb.hitrust.com/service/schema/f4000103",
            "@xmlns:xsi" : "http://www.w3.org/2001/XMLSchema-instance",
            "f40:details" : {
              "f40:detail" : [
                {
                  "f40:bankCode" : "004",
                  "f40:bankName" : "台灣銀行"
                },
                {
                  "f40:bankCode" : "007",
                  "f40:bankName" : "第一銀行"
                },
                {
                  "f40:bankCode" : "008",
                  "f40:bankName" : "華南銀行"
                },
                {
                  "f40:bankCode" : "009",
                  "f40:bankName" : "彰化銀行"
                },
                {
                  "f40:bankCode" : "012",
                  "f40:bankName" : "台北富邦"
                },
                {
                  "f40:bankCode" : "013",
                  "f40:bankName" : "國泰世華"
                }

              ]
            }
          }
        }
      }

    ];

    let noHeroes = [
      {
        "noHereosch:MNBResponse" : {
          "@xmlns:sch" : "http://mnb.hitrust.com/service/schema",
          "sch:resHeader" : {
            "sch:requestNo" : "1481860700840-fh000105",
            "sch:requestTime" : "2016-12-13T18:27:40.500+08:00",
            "sch:responseTime" : "2016-12-13T18:27:40.671+08:00",
            "sch:custId" : ""
          },
          "sch:result" : {
            "@xsi:type" : "f40:f4000103ResultType",
            "@xmlns:fh0" : "http://mnb.hitrust.com/service/schema/f4000103",
            "@xmlns:xsi" : "http://www.w3.org/2001/XMLSchema-instance",
            "f40:details" : {
              "f40:detail" : [
                {
                  "f40:bankCode" : "004",
                  "f40:bankName" : "台灣銀行"
                },
                {
                  "f40:bankCode" : "007",
                  "f40:bankName" : "第一銀行"
                },
                {
                  "f40:bankCode" : "008",
                  "f40:bankName" : "華南銀行"
                },
                {
                  "f40:bankCode" : "009",
                  "f40:bankName" : "彰化銀行"
                },
                {
                  "f40:bankCode" : "012",
                  "f40:bankName" : "台北富邦"
                },
                {
                  "f40:bankCode" : "013",
                  "f40:bankName" : "國泰世華"
                }

              ]
            }
          }
        }
      }

    ]

    return {heroes, noHeroes};

  }
}
