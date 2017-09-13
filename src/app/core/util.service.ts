import { Injectable } from '@angular/core';

@Injectable()
export class UtilService {
  formatBytes(size, precision = 1) {
    size = +size;
    if (isNaN(size) || size < 0) {
      return '-';
    }
    const units = ['bytes', 'kB', 'MB', 'GB', 'TB', 'PB'];
    const n = Math.floor(Math.log(size) / Math.log(1024));
    return (size / Math.pow(1024, n)).toFixed(precision) +  ' ' + units[n];
  }

  getTestData() {
    return {
      "took": 19895,
      "timed_out": false,
      "_shards": {
        "total": 7,
        "successful": 7,
        "failed": 0
      },
      "hits": {
        "total": 8659895,
        "max_score": 0,
        "hits": []
      },
      "aggregations": {
        "terms": {
          "doc_count_error_upper_bound": 4930,
          "sum_other_doc_count": 3035665,
          "buckets": [
            {
              "key": "34.206.152.63",
              "doc_count": 617520,
              "bytes": {
                "value": 112370532
              },
              "top_hit": {
                "hits": {
                  "total": 617520,
                  "max_score": 2.3697739,
                  "hits": [
                    {
                      "_index": "404_netflow_2017_08_20",
                      "_type": "data",
                      "_id": "AV4ATZi9A4NVhZlY6w41",
                      "_score": 2.3697739,
                      "_source": {
                        "networkType": [
                          "CDN"
                        ]
                      }
                    }
                  ]
                }
              }
            },
            {
              "key": "52.201.172.22",
              "doc_count": 617446,
              "bytes": {
                "value": 114499147
              },
              "top_hit": {
                "hits": {
                  "total": 617446,
                  "max_score": 2.3697739,
                  "hits": [
                    {
                      "_index": "404_netflow_2017_08_20",
                      "_type": "data",
                      "_id": "AV4ATZjAA4NVhZlY6xEQ",
                      "_score": 2.3697739,
                      "_source": {
                        "networkType": [
                          "CLOUD HOSTING",
                          "ENTERTAINMENT",
                          "SEARCH ENGINE",
                          "SOCIAL NETWORKING"
                        ]
                      }
                    }
                  ]
                }
              }
            },
            {
              "key": "34.203.174.161",
              "doc_count": 616912,
              "bytes": {
                "value": 115738316
              },
              "top_hit": {
                "hits": {
                  "total": 616912,
                  "max_score": 2.3697739,
                  "hits": [
                    {
                      "_index": "404_netflow_2017_08_20",
                      "_type": "data",
                      "_id": "AV4ATZi9A4NVhZlY6w4t",
                      "_score": 2.3697739,
                      "_source": {
                        "networkType": [
                          "CDN"
                        ]
                      }
                    }
                  ]
                }
              }
            },
            {
              "key": "54.86.219.126",
              "doc_count": 614198,
              "bytes": {
                "value": 113504394
              },
              "top_hit": {
                "hits": {
                  "total": 614198,
                  "max_score": 2.3697739,
                  "hits": [
                    {
                      "_index": "404_netflow_2017_08_20",
                      "_type": "data",
                      "_id": "AV4ATZi4A4NVhZlY6wrS",
                      "_score": 2.3697739,
                      "_source": {
                        "networkType": [
                          "ENTERTAINMENT",
                          "SEARCH ENGINE",
                          "SOCIAL NETWORKING"
                        ]
                      }
                    }
                  ]
                }
              }
            },
            {
              "key": "23.218.112.97",
              "doc_count": 324348,
              "bytes": {
                "value": 204605485
              },
              "top_hit": {
                "hits": {
                  "total": 324348,
                  "max_score": 2.3697739,
                  "hits": [
                    {
                      "_index": "404_netflow_2017_08_20",
                      "_type": "data",
                      "_id": "AV4BysrvA4NVhZlYKdId",
                      "_score": 2.3697739,
                      "_source": {
                        "networkType": [
                          "CDN",
                          "CLOUD HOSTING",
                          "SOCIAL NETWORKING"
                        ]
                      }
                    }
                  ]
                }
              }
            },
            {
              "key": "173.243.12.45",
              "doc_count": 207294,
              "bytes": {
                "value": 96718174
              },
              "top_hit": {
                "hits": {
                  "total": 207294,
                  "max_score": 2.3565366,
                  "hits": [
                    {
                      "_index": "404_netflow_2017_08_17",
                      "_type": "data",
                      "_id": "AV3vTnv0c42rLXmA19IN",
                      "_score": 2.3565366,
                      "_source": {
                        "networkType": [
                          ""
                        ]
                      }
                    }
                  ]
                }
              }
            },
            {
              "key": "54.161.67.244",
              "doc_count": 194625,
              "bytes": {
                "value": 9294941913
              },
              "top_hit": {
                "hits": {
                  "total": 194625,
                  "max_score": 2.3697739,
                  "hits": [
                    {
                      "_index": "404_netflow_2017_08_20",
                      "_type": "data",
                      "_id": "AV4ATZjFA4NVhZlY6xVB",
                      "_score": 2.3697739,
                      "_source": {
                        "networkType": [
                          "CDN"
                        ]
                      }
                    }
                  ]
                }
              }
            },
            {
              "key": "206.210.74.246",
              "doc_count": 170978,
              "bytes": {
                "value": 5289628883
              },
              "top_hit": {
                "hits": {
                  "total": 170978,
                  "max_score": 2.3697739,
                  "hits": [
                    {
                      "_index": "404_netflow_2017_08_20",
                      "_type": "data",
                      "_id": "AV4ATZjAA4NVhZlY6xEo",
                      "_score": 2.3697739,
                      "_source": {
                        "networkType": [
                          ""
                        ]
                      }
                    }
                  ]
                }
              }
            },
            {
              "key": "172.217.8.206",
              "doc_count": 144337,
              "bytes": {
                "value": 50693213
              },
              "top_hit": {
                "hits": {
                  "total": 144337,
                  "max_score": 2.3697739,
                  "hits": [
                    {
                      "_index": "404_netflow_2017_08_20",
                      "_type": "data",
                      "_id": "AV4ATZjAA4NVhZlY6xFL",
                      "_score": 2.3697739,
                      "_source": {
                        "networkType": [
                          "CLOUD HOSTING",
                          "FILE HOSTING",
                          "SEARCH ENGINE",
                          "SOCIAL NETWORKING"
                        ]
                      }
                    }
                  ]
                }
              }
            },
            {
              "key": "23.196.56.192",
              "doc_count": 124068,
              "bytes": {
                "value": 77487044
              },
              "top_hit": {
                "hits": {
                  "total": 124068,
                  "max_score": 2.3565366,
                  "hits": [
                    {
                      "_index": "404_netflow_2017_08_17",
                      "_type": "data",
                      "_id": "AV3yV0vSc42rLXmAeCE8",
                      "_score": 2.3565366,
                      "_source": {
                        "networkType": [
                          "CDN",
                          "CLOUD HOSTING",
                          "SOCIAL NETWORKING"
                        ]
                      }
                    }
                  ]
                }
              }
            },
            {
              "key": "66.163.36.97",
              "doc_count": 121090,
              "bytes": {
                "value": 56296755
              },
              "top_hit": {
                "hits": {
                  "total": 121090,
                  "max_score": 2.3697739,
                  "hits": [
                    {
                      "_index": "404_netflow_2017_08_20",
                      "_type": "data",
                      "_id": "AV4ATZjFA4NVhZlY6xWh",
                      "_score": 2.3697739,
                      "_source": {
                        "networkType": [
                          ""
                        ]
                      }
                    }
                  ]
                }
              }
            },
            {
              "key": "34.226.41.159",
              "doc_count": 103150,
              "bytes": {
                "value": 18441831
              },
              "top_hit": {
                "hits": {
                  "total": 103150,
                  "max_score": 2.2635016,
                  "hits": [
                    {
                      "_index": "404_netflow_2017_08_16",
                      "_type": "data",
                      "_id": "AV3qbZNBc42rLXmAUI9P",
                      "_score": 2.2635016,
                      "_source": {
                        "networkType": [
                          "CDN"
                        ]
                      }
                    }
                  ]
                }
              }
            },
            {
              "key": "52.7.115.121",
              "doc_count": 101689,
              "bytes": {
                "value": 18350542
              },
              "top_hit": {
                "hits": {
                  "total": 101689,
                  "max_score": 2.2635016,
                  "hits": [
                    {
                      "_index": "404_netflow_2017_08_16",
                      "_type": "data",
                      "_id": "AV3qbZNBc42rLXmAUI_y",
                      "_score": 2.2635016,
                      "_source": {
                        "networkType": [
                          "CDN"
                        ]
                      }
                    }
                  ]
                }
              }
            },
            {
              "key": "172.31.0.20",
              "doc_count": 98876,
              "bytes": {
                "value": 106959315689
              },
              "top_hit": {
                "hits": {
                  "total": 98876,
                  "max_score": 2.3697739,
                  "hits": [
                    {
                      "_index": "404_netflow_2017_08_20",
                      "_type": "data",
                      "_id": "AV4ATZi9A4NVhZlY6w4o",
                      "_score": 2.3697739,
                      "_source": {
                        "networkType": [
                          ""
                        ]
                      }
                    }
                  ]
                }
              }
            },
            {
              "key": "34.198.146.41",
              "doc_count": 79181,
              "bytes": {
                "value": 21192957
              },
              "top_hit": {
                "hits": {
                  "total": 79181,
                  "max_score": 2.3565366,
                  "hits": [
                    {
                      "_index": "404_netflow_2017_08_17",
                      "_type": "data",
                      "_id": "AV3vTnxHc42rLXmA19fc",
                      "_score": 2.3565366,
                      "_source": {
                        "networkType": [
                          "CDN"
                        ]
                      }
                    }
                  ]
                }
              }
            },
            {
              "key": "50.17.17.225",
              "doc_count": 79127,
              "bytes": {
                "value": 15529869
              },
              "top_hit": {
                "hits": {
                  "total": 79127,
                  "max_score": 2.3565366,
                  "hits": [
                    {
                      "_index": "404_netflow_2017_08_17",
                      "_type": "data",
                      "_id": "AV3vTnxHc42rLXmA19ee",
                      "_score": 2.3565366,
                      "_source": {
                        "networkType": [
                          "CDN"
                        ]
                      }
                    }
                  ]
                }
              }
            },
            {
              "key": "34.194.10.153",
              "doc_count": 77860,
              "bytes": {
                "value": 14721591
              },
              "top_hit": {
                "hits": {
                  "total": 77860,
                  "max_score": 2.3565366,
                  "hits": [
                    {
                      "_index": "404_netflow_2017_08_17",
                      "_type": "data",
                      "_id": "AV3vTnxHc42rLXmA19g0",
                      "_score": 2.3565366,
                      "_source": {
                        "networkType": [
                          "CDN"
                        ]
                      }
                    }
                  ]
                }
              }
            },
            {
              "key": "52.54.9.154",
              "doc_count": 76478,
              "bytes": {
                "value": 23183849
              },
              "top_hit": {
                "hits": {
                  "total": 76478,
                  "max_score": 2.3565366,
                  "hits": [
                    {
                      "_index": "404_netflow_2017_08_17",
                      "_type": "data",
                      "_id": "AV3vTnxHc42rLXmA19ez",
                      "_score": 2.3565366,
                      "_source": {
                        "networkType": [
                          "CLOUD HOSTING",
                          "ENTERTAINMENT",
                          "SEARCH ENGINE",
                          "SOCIAL NETWORKING"
                        ]
                      }
                    }
                  ]
                }
              }
            },
            {
              "key": "208.84.66.71",
              "doc_count": 66408,
              "bytes": {
                "value": 7620642411
              },
              "top_hit": {
                "hits": {
                  "total": 66408,
                  "max_score": 2.3697739,
                  "hits": [
                    {
                      "_index": "404_netflow_2017_08_20",
                      "_type": "data",
                      "_id": "AV4ATZjLA4NVhZlY6xeq",
                      "_score": 2.3697739,
                      "_source": {
                        "networkType": [
                          ""
                        ]
                      }
                    }
                  ]
                }
              }
            },
            {
              "key": "34.194.78.157",
              "doc_count": 61978,
              "bytes": {
                "value": 18092217
              },
              "top_hit": {
                "hits": {
                  "total": 61978,
                  "max_score": 2.3565366,
                  "hits": [
                    {
                      "_index": "404_netflow_2017_08_17",
                      "_type": "data",
                      "_id": "AV3vTnxHc42rLXmA19fl",
                      "_score": 2.3565366,
                      "_source": {
                        "networkType": [
                          "CDN"
                        ]
                      }
                    }
                  ]
                }
              }
            },
            {
              "key": "34.196.129.248",
              "doc_count": 61201,
              "bytes": {
                "value": 11241667
              },
              "top_hit": {
                "hits": {
                  "total": 61201,
                  "max_score": 2.3565366,
                  "hits": [
                    {
                      "_index": "404_netflow_2017_08_17",
                      "_type": "data",
                      "_id": "AV3vTnxLc42rLXmA19xW",
                      "_score": 2.3565366,
                      "_source": {
                        "networkType": [
                          "CDN"
                        ]
                      }
                    }
                  ]
                }
              }
            },
            {
              "key": "172.86.160.2",
              "doc_count": 55973,
              "bytes": {
                "value": 15965894
              },
              "top_hit": {
                "hits": {
                  "total": 55973,
                  "max_score": 2.3697739,
                  "hits": [
                    {
                      "_index": "404_netflow_2017_08_20",
                      "_type": "data",
                      "_id": "AV4AU4EPA4NVhZlY6-vG",
                      "_score": 2.3697739,
                      "_source": {
                        "networkType": [
                          ""
                        ]
                      }
                    }
                  ]
                }
              }
            },
            {
              "key": "172.217.0.14",
              "doc_count": 43175,
              "bytes": {
                "value": 20330388
              },
              "top_hit": {
                "hits": {
                  "total": 43175,
                  "max_score": 2.3565366,
                  "hits": [
                    {
                      "_index": "404_netflow_2017_08_17",
                      "_type": "data",
                      "_id": "AV3zZnr2c42rLXmAlxVY",
                      "_score": 2.3565366,
                      "_source": {
                        "networkType": [
                          "CLOUD HOSTING",
                          "FILE HOSTING",
                          "SEARCH ENGINE",
                          "SOCIAL NETWORKING"
                        ]
                      }
                    }
                  ]
                }
              }
            },
            {
              "key": "172.217.8.174",
              "doc_count": 40196,
              "bytes": {
                "value": 31360924
              },
              "top_hit": {
                "hits": {
                  "total": 40196,
                  "max_score": 2.3584287,
                  "hits": [
                    {
                      "_index": "404_netflow_2017_08_21",
                      "_type": "data",
                      "_id": "AV4FA_Ptc42rLXmA3gwZ",
                      "_score": 2.3584287,
                      "_source": {
                        "networkType": [
                          "CLOUD HOSTING",
                          "FILE HOSTING",
                          "SEARCH ENGINE",
                          "SOCIAL NETWORKING"
                        ]
                      }
                    }
                  ]
                }
              }
            },
            {
              "key": "172.217.1.46",
              "doc_count": 37600,
              "bytes": {
                "value": 42388270
              },
              "top_hit": {
                "hits": {
                  "total": 37600,
                  "max_score": 2.3584287,
                  "hits": [
                    {
                      "_index": "404_netflow_2017_08_21",
                      "_type": "data",
                      "_id": "AV4FA_Psc42rLXmA3gr7",
                      "_score": 2.3584287,
                      "_source": {
                        "networkType": [
                          "CLOUD HOSTING",
                          "FILE HOSTING",
                          "SEARCH ENGINE",
                          "SOCIAL NETWORKING"
                        ]
                      }
                    }
                  ]
                }
              }
            },
            {
              "key": "172.31.0.21",
              "doc_count": 37593,
              "bytes": {
                "value": 88591952654
              },
              "top_hit": {
                "hits": {
                  "total": 37593,
                  "max_score": 2.3697739,
                  "hits": [
                    {
                      "_index": "404_netflow_2017_08_20",
                      "_type": "data",
                      "_id": "AV4ATZjSA4NVhZlY6xwv",
                      "_score": 2.3697739,
                      "_source": {
                        "networkType": [
                          ""
                        ]
                      }
                    }
                  ]
                }
              }
            },
            {
              "key": "74.111.162.91",
              "doc_count": 36124,
              "bytes": {
                "value": 996308100
              },
              "top_hit": {
                "hits": {
                  "total": 36124,
                  "max_score": 2.3697739,
                  "hits": [
                    {
                      "_index": "404_netflow_2017_08_20",
                      "_type": "data",
                      "_id": "AV4ATZjAA4NVhZlY6xGS",
                      "_score": 2.3697739,
                      "_source": {
                        "networkType": [
                          ""
                        ]
                      }
                    }
                  ]
                }
              }
            },
            {
              "key": "178.255.83.1",
              "doc_count": 28946,
              "bytes": {
                "value": 14539442
              },
              "top_hit": {
                "hits": {
                  "total": 28946,
                  "max_score": 2.3697739,
                  "hits": [
                    {
                      "_index": "404_netflow_2017_08_20",
                      "_type": "data",
                      "_id": "AV4ATZjFA4NVhZlY6xRU",
                      "_score": 2.3697739,
                      "_source": {
                        "networkType": [
                          ""
                        ]
                      }
                    }
                  ]
                }
              }
            },
            {
              "key": "209.166.161.43",
              "doc_count": 26198,
              "bytes": {
                "value": 37306172
              },
              "top_hit": {
                "hits": {
                  "total": 26198,
                  "max_score": 2.3697739,
                  "hits": [
                    {
                      "_index": "404_netflow_2017_08_20",
                      "_type": "data",
                      "_id": "AV4ATZjSA4NVhZlY6xqa",
                      "_score": 2.3697739,
                      "_source": {
                        "networkType": [
                          ""
                        ]
                      }
                    }
                  ]
                }
              }
            },
            {
              "key": "172.31.0.111",
              "doc_count": 24977,
              "bytes": {
                "value": 140927410
              },
              "top_hit": {
                "hits": {
                  "total": 24977,
                  "max_score": 2.3697739,
                  "hits": [
                    {
                      "_index": "404_netflow_2017_08_20",
                      "_type": "data",
                      "_id": "AV4ATZi9A4NVhZlY6w6k",
                      "_score": 2.3697739,
                      "_source": {
                        "networkType": [
                          ""
                        ]
                      }
                    }
                  ]
                }
              }
            },
            {
              "key": "66.163.36.139",
              "doc_count": 23105,
              "bytes": {
                "value": 36981962
              },
              "top_hit": {
                "hits": {
                  "total": 23105,
                  "max_score": 2.3697739,
                  "hits": [
                    {
                      "_index": "404_netflow_2017_08_20",
                      "_type": "data",
                      "_id": "AV4AUMA0A4NVhZlY63UE",
                      "_score": 2.3697739,
                      "_source": {
                        "networkType": [
                          ""
                        ]
                      }
                    }
                  ]
                }
              }
            },
            {
              "key": "209.166.161.48",
              "doc_count": 21715,
              "bytes": {
                "value": 76451136
              },
              "top_hit": {
                "hits": {
                  "total": 21715,
                  "max_score": 2.3697739,
                  "hits": [
                    {
                      "_index": "404_netflow_2017_08_20",
                      "_type": "data",
                      "_id": "AV4ATZjSA4NVhZlY6x29",
                      "_score": 2.3697739,
                      "_source": {
                        "networkType": [
                          ""
                        ]
                      }
                    }
                  ]
                }
              }
            },
            {
              "key": "23.217.149.230",
              "doc_count": 21263,
              "bytes": {
                "value": 13445335
              },
              "top_hit": {
                "hits": {
                  "total": 21263,
                  "max_score": 2.3561282,
                  "hits": [
                    {
                      "_index": "404_netflow_2017_08_18",
                      "_type": "data",
                      "_id": "AV32M2xyc42rLXmAWWbk",
                      "_score": 2.3561282,
                      "_source": {
                        "networkType": [
                          "CDN",
                          "CLOUD HOSTING",
                          "SOCIAL NETWORKING"
                        ]
                      }
                    }
                  ]
                }
              }
            },
            {
              "key": "31.13.69.228",
              "doc_count": 21109,
              "bytes": {
                "value": 183190884
              },
              "top_hit": {
                "hits": {
                  "total": 21109,
                  "max_score": 2.3584287,
                  "hits": [
                    {
                      "_index": "404_netflow_2017_08_21",
                      "_type": "data",
                      "_id": "AV4EirrTc42rLXmAqF_f",
                      "_score": 2.3584287,
                      "_source": {
                        "networkType": [
                          "SOCIAL NETWORKING"
                        ]
                      }
                    }
                  ]
                }
              }
            },
            {
              "key": "31.13.69.203",
              "doc_count": 19379,
              "bytes": {
                "value": 30758443
              },
              "top_hit": {
                "hits": {
                  "total": 19379,
                  "max_score": 2.3584287,
                  "hits": [
                    {
                      "_index": "404_netflow_2017_08_21",
                      "_type": "data",
                      "_id": "AV4Eir4kc42rLXmAqICk",
                      "_score": 2.3584287,
                      "_source": {
                        "networkType": [
                          "SOCIAL NETWORKING"
                        ]
                      }
                    }
                  ]
                }
              }
            },
            {
              "key": "104.27.111.84",
              "doc_count": 18963,
              "bytes": {
                "value": 21372528
              },
              "top_hit": {
                "hits": {
                  "total": 18963,
                  "max_score": 2.3584287,
                  "hits": [
                    {
                      "_index": "404_netflow_2017_08_21",
                      "_type": "data",
                      "_id": "AV4FA_Ptc42rLXmA3gwq",
                      "_score": 2.3584287,
                      "_source": {
                        "networkType": [
                          "CDN",
                          "CLOUD HOSTING",
                          "ENTERTAINMENT",
                          "SEARCH ENGINE",
                          "SOCIAL NETWORKING"
                        ]
                      }
                    }
                  ]
                }
              }
            },
            {
              "key": "104.27.110.84",
              "doc_count": 17689,
              "bytes": {
                "value": 19820192
              },
              "top_hit": {
                "hits": {
                  "total": 17689,
                  "max_score": 2.3584287,
                  "hits": [
                    {
                      "_index": "404_netflow_2017_08_21",
                      "_type": "data",
                      "_id": "AV4Ejc1Sc42rLXmArHax",
                      "_score": 2.3584287,
                      "_source": {
                        "networkType": [
                          "CDN",
                          "CLOUD HOSTING",
                          "ENTERTAINMENT",
                          "SEARCH ENGINE",
                          "SOCIAL NETWORKING"
                        ]
                      }
                    }
                  ]
                }
              }
            },
            {
              "key": "172.31.0.110",
              "doc_count": 17345,
              "bytes": {
                "value": 94090720
              },
              "top_hit": {
                "hits": {
                  "total": 17345,
                  "max_score": 2.3697739,
                  "hits": [
                    {
                      "_index": "404_netflow_2017_08_20",
                      "_type": "data",
                      "_id": "AV4ATZjFA4NVhZlY6xTI",
                      "_score": 2.3697739,
                      "_source": {
                        "networkType": [
                          ""
                        ]
                      }
                    }
                  ]
                }
              }
            },
            {
              "key": "172.217.1.35",
              "doc_count": 16298,
              "bytes": {
                "value": 15438561
              },
              "top_hit": {
                "hits": {
                  "total": 16298,
                  "max_score": 2.3584287,
                  "hits": [
                    {
                      "_index": "404_netflow_2017_08_21",
                      "_type": "data",
                      "_id": "AV4FA_Psc42rLXmA3gp-",
                      "_score": 2.3584287,
                      "_source": {
                        "networkType": [
                          "CLOUD HOSTING",
                          "FILE HOSTING",
                          "SEARCH ENGINE",
                          "SOCIAL NETWORKING"
                        ]
                      }
                    }
                  ]
                }
              }
            },
            {
              "key": "69.147.92.11",
              "doc_count": 15762,
              "bytes": {
                "value": 43487026
              },
              "top_hit": {
                "hits": {
                  "total": 15762,
                  "max_score": 2.3584287,
                  "hits": [
                    {
                      "_index": "404_netflow_2017_08_21",
                      "_type": "data",
                      "_id": "AV4EkSwjc42rLXmAsZ7b",
                      "_score": 2.3584287,
                      "_source": {
                        "networkType": [
                          ""
                        ]
                      }
                    }
                  ]
                }
              }
            },
            {
              "key": "208.85.40.50",
              "doc_count": 15384,
              "bytes": {
                "value": 22846427
              },
              "top_hit": {
                "hits": {
                  "total": 15384,
                  "max_score": 2.3584287,
                  "hits": [
                    {
                      "_index": "404_netflow_2017_08_21",
                      "_type": "data",
                      "_id": "AV4FA_P6c42rLXmA3hEB",
                      "_score": 2.3584287,
                      "_source": {
                        "networkType": [
                          "ENTERTAINMENT"
                        ]
                      }
                    }
                  ]
                }
              }
            },
            {
              "key": "69.147.92.12",
              "doc_count": 15178,
              "bytes": {
                "value": 53390491
              },
              "top_hit": {
                "hits": {
                  "total": 15178,
                  "max_score": 2.3584287,
                  "hits": [
                    {
                      "_index": "404_netflow_2017_08_21",
                      "_type": "data",
                      "_id": "AV4EkQ4nc42rLXmAsLMN",
                      "_score": 2.3584287,
                      "_source": {
                        "networkType": [
                          ""
                        ]
                      }
                    }
                  ]
                }
              }
            },
            {
              "key": "208.85.40.20",
              "doc_count": 15090,
              "bytes": {
                "value": 22203995
              },
              "top_hit": {
                "hits": {
                  "total": 15090,
                  "max_score": 2.3584287,
                  "hits": [
                    {
                      "_index": "404_netflow_2017_08_21",
                      "_type": "data",
                      "_id": "AV4FA_Ptc42rLXmA3gw2",
                      "_score": 2.3584287,
                      "_source": {
                        "networkType": [
                          "ENTERTAINMENT"
                        ]
                      }
                    }
                  ]
                }
              }
            },
            {
              "key": "65.55.44.109",
              "doc_count": 13975,
              "bytes": {
                "value": 17668139
              },
              "top_hit": {
                "hits": {
                  "total": 13975,
                  "max_score": 2.3697739,
                  "hits": [
                    {
                      "_index": "404_netflow_2017_08_20",
                      "_type": "data",
                      "_id": "AV4ATZi9A4NVhZlY6w6u",
                      "_score": 2.3697739,
                      "_source": {
                        "networkType": [
                          "CLOUD HOSTING",
                          "SEARCH ENGINE",
                          "SOCIAL NETWORKING",
                          "SOFTWARE DOWNLOADS"
                        ]
                      }
                    }
                  ]
                }
              }
            },
            {
              "key": "157.240.2.25",
              "doc_count": 13802,
              "bytes": {
                "value": 76145870
              },
              "top_hit": {
                "hits": {
                  "total": 13802,
                  "max_score": 2.3584287,
                  "hits": [
                    {
                      "_index": "404_netflow_2017_08_21",
                      "_type": "data",
                      "_id": "AV4Eiq56c42rLXmAp_u3",
                      "_score": 2.3584287,
                      "_source": {
                        "networkType": [
                          "SOCIAL NETWORKING"
                        ]
                      }
                    }
                  ]
                }
              }
            },
            {
              "key": "216.82.250.247",
              "doc_count": 13587,
              "bytes": {
                "value": 116797829
              },
              "top_hit": {
                "hits": {
                  "total": 13587,
                  "max_score": 2.3697739,
                  "hits": [
                    {
                      "_index": "404_netflow_2017_08_20",
                      "_type": "data",
                      "_id": "AV4AUi6QA4NVhZlY69gG",
                      "_score": 2.3697739,
                      "_source": {
                        "networkType": [
                          ""
                        ]
                      }
                    }
                  ]
                }
              }
            },
            {
              "key": "72.21.81.200",
              "doc_count": 13306,
              "bytes": {
                "value": 11782388
              },
              "top_hit": {
                "hits": {
                  "total": 13306,
                  "max_score": 2.3584287,
                  "hits": [
                    {
                      "_index": "404_netflow_2017_08_21",
                      "_type": "data",
                      "_id": "AV4DPBhcc42rLXmAf6Z0",
                      "_score": 2.3584287,
                      "_source": {
                        "networkType": [
                          ""
                        ]
                      }
                    }
                  ]
                }
              }
            },
            {
              "key": "209.166.161.41",
              "doc_count": 12793,
              "bytes": {
                "value": 44421169
              },
              "top_hit": {
                "hits": {
                  "total": 12793,
                  "max_score": 2.3697739,
                  "hits": [
                    {
                      "_index": "404_netflow_2017_08_20",
                      "_type": "data",
                      "_id": "AV4ATZjSA4NVhZlY6xy3",
                      "_score": 2.3697739,
                      "_source": {
                        "networkType": [
                          ""
                        ]
                      }
                    }
                  ]
                }
              }
            },
            {
              "key": "216.82.243.55",
              "doc_count": 12581,
              "bytes": {
                "value": 113231461
              },
              "top_hit": {
                "hits": {
                  "total": 12581,
                  "max_score": 2.3697739,
                  "hits": [
                    {
                      "_index": "404_netflow_2017_08_20",
                      "_type": "data",
                      "_id": "AV4AXkxxA4NVhZlY7ZJi",
                      "_score": 2.3697739,
                      "_source": {
                        "networkType": [
                          ""
                        ]
                      }
                    }
                  ]
                }
              }
            },
            {
              "key": "172.217.4.238",
              "doc_count": 12434,
              "bytes": {
                "value": 3354791
              },
              "top_hit": {
                "hits": {
                  "total": 12434,
                  "max_score": 2.3565366,
                  "hits": [
                    {
                      "_index": "404_netflow_2017_08_17",
                      "_type": "data",
                      "_id": "AV3vTnxHc42rLXmA19gT",
                      "_score": 2.3565366,
                      "_source": {
                        "networkType": [
                          "CLOUD HOSTING",
                          "FILE HOSTING",
                          "SEARCH ENGINE",
                          "SOCIAL NETWORKING"
                        ]
                      }
                    }
                  ]
                }
              }
            },
            {
              "key": "52.4.77.150",
              "doc_count": 12303,
              "bytes": {
                "value": 24492482
              },
              "top_hit": {
                "hits": {
                  "total": 12303,
                  "max_score": 2.3697739,
                  "hits": [
                    {
                      "_index": "404_netflow_2017_08_20",
                      "_type": "data",
                      "_id": "AV4ATZjLA4NVhZlY6xf7",
                      "_score": 2.3697739,
                      "_source": {
                        "networkType": [
                          "CDN"
                        ]
                      }
                    }
                  ]
                }
              }
            },
            {
              "key": "72.30.3.43",
              "doc_count": 12012,
              "bytes": {
                "value": 4459963
              },
              "top_hit": {
                "hits": {
                  "total": 12012,
                  "max_score": 2.3584287,
                  "hits": [
                    {
                      "_index": "404_netflow_2017_08_21",
                      "_type": "data",
                      "_id": "AV4EkR4Oc42rLXmAsUT4",
                      "_score": 2.3584287,
                      "_source": {
                        "networkType": [
                          "SEARCH ENGINE"
                        ]
                      }
                    }
                  ]
                }
              }
            },
            {
              "key": "172.217.1.38",
              "doc_count": 11296,
              "bytes": {
                "value": 4435813
              },
              "top_hit": {
                "hits": {
                  "total": 11296,
                  "max_score": 2.3584287,
                  "hits": [
                    {
                      "_index": "404_netflow_2017_08_21",
                      "_type": "data",
                      "_id": "AV4FA_Poc42rLXmA3ghM",
                      "_score": 2.3584287,
                      "_source": {
                        "networkType": [
                          "CLOUD HOSTING",
                          "FILE HOSTING",
                          "SEARCH ENGINE",
                          "SOCIAL NETWORKING"
                        ]
                      }
                    }
                  ]
                }
              }
            },
            {
              "key": "172.217.8.194",
              "doc_count": 11168,
              "bytes": {
                "value": 4879489
              },
              "top_hit": {
                "hits": {
                  "total": 11168,
                  "max_score": 2.3584287,
                  "hits": [
                    {
                      "_index": "404_netflow_2017_08_21",
                      "_type": "data",
                      "_id": "AV4Ejc7qc42rLXmArIW7",
                      "_score": 2.3584287,
                      "_source": {
                        "networkType": [
                          "CLOUD HOSTING",
                          "FILE HOSTING",
                          "SEARCH ENGINE",
                          "SOCIAL NETWORKING"
                        ]
                      }
                    }
                  ]
                }
              }
            },
            {
              "key": "108.174.10.10",
              "doc_count": 11112,
              "bytes": {
                "value": 59065671
              },
              "top_hit": {
                "hits": {
                  "total": 11112,
                  "max_score": 2.3565366,
                  "hits": [
                    {
                      "_index": "404_netflow_2017_08_17",
                      "_type": "data",
                      "_id": "AV3v5RvQc42rLXmA3UO2",
                      "_score": 2.3565366,
                      "_source": {
                        "networkType": [
                          "SOCIAL NETWORKING"
                        ]
                      }
                    }
                  ]
                }
              }
            },
            {
              "key": "23.4.187.27",
              "doc_count": 11057,
              "bytes": {
                "value": 4433700
              },
              "top_hit": {
                "hits": {
                  "total": 11057,
                  "max_score": 2.3697739,
                  "hits": [
                    {
                      "_index": "404_netflow_2017_08_20",
                      "_type": "data",
                      "_id": "AV4AUimvA4NVhZlY69Cq",
                      "_score": 2.3697739,
                      "_source": {
                        "networkType": [
                          "CDN",
                          "CLOUD HOSTING",
                          "SOCIAL NETWORKING",
                          "SOFTWARE DOWNLOADS"
                        ]
                      }
                    }
                  ]
                }
              }
            },
            {
              "key": "209.166.161.42",
              "doc_count": 10709,
              "bytes": {
                "value": 34366306
              },
              "top_hit": {
                "hits": {
                  "total": 10709,
                  "max_score": 2.3584287,
                  "hits": [
                    {
                      "_index": "404_netflow_2017_08_21",
                      "_type": "data",
                      "_id": "AV4DiqNCc42rLXmAiovc",
                      "_score": 2.3584287,
                      "_source": {
                        "networkType": [
                          ""
                        ]
                      }
                    }
                  ]
                }
              }
            },
            {
              "key": "172.217.8.163",
              "doc_count": 10574,
              "bytes": {
                "value": 10037235
              },
              "top_hit": {
                "hits": {
                  "total": 10574,
                  "max_score": 2.3584287,
                  "hits": [
                    {
                      "_index": "404_netflow_2017_08_21",
                      "_type": "data",
                      "_id": "AV4E8oP_c42rLXmA1tgA",
                      "_score": 2.3584287,
                      "_source": {
                        "networkType": [
                          "CLOUD HOSTING",
                          "FILE HOSTING",
                          "SEARCH ENGINE",
                          "SOCIAL NETWORKING"
                        ]
                      }
                    }
                  ]
                }
              }
            },
            {
              "key": "204.79.197.200",
              "doc_count": 9896,
              "bytes": {
                "value": 31120196
              },
              "top_hit": {
                "hits": {
                  "total": 9896,
                  "max_score": 2.3697739,
                  "hits": [
                    {
                      "_index": "404_netflow_2017_08_20",
                      "_type": "data",
                      "_id": "AV4AX7nIA4NVhZlY7cfF",
                      "_score": 2.3697739,
                      "_source": {
                        "networkType": [
                          "CLOUD HOSTING"
                        ]
                      }
                    }
                  ]
                }
              }
            },
            {
              "key": "54.227.252.6",
              "doc_count": 9388,
              "bytes": {
                "value": 10155473
              },
              "top_hit": {
                "hits": {
                  "total": 9388,
                  "max_score": 2.3697739,
                  "hits": [
                    {
                      "_index": "404_netflow_2017_08_20",
                      "_type": "data",
                      "_id": "AV4A-p01A4NVhZlYB-tF",
                      "_score": 2.3697739,
                      "_source": {
                        "networkType": [
                          "CDN",
                          "SOFTWARE DOWNLOADS"
                        ]
                      }
                    }
                  ]
                }
              }
            },
            {
              "key": "23.218.73.166",
              "doc_count": 9282,
              "bytes": {
                "value": 165528706
              },
              "top_hit": {
                "hits": {
                  "total": 9282,
                  "max_score": 2.3584287,
                  "hits": [
                    {
                      "_index": "404_netflow_2017_08_21",
                      "_type": "data",
                      "_id": "AV4EkRVEc42rLXmAsPDy",
                      "_score": 2.3584287,
                      "_source": {
                        "networkType": [
                          "CDN",
                          "CLOUD HOSTING",
                          "SOCIAL NETWORKING"
                        ]
                      }
                    }
                  ]
                }
              }
            },
            {
              "key": "172.217.1.36",
              "doc_count": 9248,
              "bytes": {
                "value": 38920905
              },
              "top_hit": {
                "hits": {
                  "total": 9248,
                  "max_score": 2.3584287,
                  "hits": [
                    {
                      "_index": "404_netflow_2017_08_21",
                      "_type": "data",
                      "_id": "AV4FA_Psc42rLXmA3gm3",
                      "_score": 2.3584287,
                      "_source": {
                        "networkType": [
                          "CLOUD HOSTING",
                          "FILE HOSTING",
                          "SEARCH ENGINE",
                          "SOCIAL NETWORKING"
                        ]
                      }
                    }
                  ]
                }
              }
            },
            {
              "key": "209.166.161.40",
              "doc_count": 8939,
              "bytes": {
                "value": 51544547
              },
              "top_hit": {
                "hits": {
                  "total": 8939,
                  "max_score": 2.3584287,
                  "hits": [
                    {
                      "_index": "404_netflow_2017_08_21",
                      "_type": "data",
                      "_id": "AV4D-I9Pc42rLXmAmzN2",
                      "_score": 2.3584287,
                      "_source": {
                        "networkType": [
                          ""
                        ]
                      }
                    }
                  ]
                }
              }
            },
            {
              "key": "172.217.1.34",
              "doc_count": 8852,
              "bytes": {
                "value": 3730089
              },
              "top_hit": {
                "hits": {
                  "total": 8852,
                  "max_score": 2.3584287,
                  "hits": [
                    {
                      "_index": "404_netflow_2017_08_21",
                      "_type": "data",
                      "_id": "AV4DvuUec42rLXmAkfyj",
                      "_score": 2.3584287,
                      "_source": {
                        "networkType": [
                          "CLOUD HOSTING",
                          "FILE HOSTING",
                          "SEARCH ENGINE",
                          "SOCIAL NETWORKING"
                        ]
                      }
                    }
                  ]
                }
              }
            },
            {
              "key": "191.232.80.53",
              "doc_count": 8660,
              "bytes": {
                "value": 2449350
              },
              "top_hit": {
                "hits": {
                  "total": 8660,
                  "max_score": 2.3697739,
                  "hits": [
                    {
                      "_index": "404_netflow_2017_08_20",
                      "_type": "data",
                      "_id": "AV4AXkxtA4NVhZlY7Y2v",
                      "_score": 2.3697739,
                      "_source": {
                        "networkType": [
                          "CLOUD HOSTING",
                          "SEARCH ENGINE",
                          "SOCIAL NETWORKING"
                        ]
                      }
                    }
                  ]
                }
              }
            },
            {
              "key": "216.58.192.206",
              "doc_count": 8527,
              "bytes": {
                "value": 9184528
              },
              "top_hit": {
                "hits": {
                  "total": 8527,
                  "max_score": 2.3565366,
                  "hits": [
                    {
                      "_index": "404_netflow_2017_08_17",
                      "_type": "data",
                      "_id": "AV3wwrFkc42rLXmABIr3",
                      "_score": 2.3565366,
                      "_source": {
                        "networkType": [
                          "CLOUD HOSTING",
                          "FILE HOSTING",
                          "SEARCH ENGINE",
                          "SOCIAL NETWORKING"
                        ]
                      }
                    }
                  ]
                }
              }
            },
            {
              "key": "216.155.194.56",
              "doc_count": 8516,
              "bytes": {
                "value": 3172299
              },
              "top_hit": {
                "hits": {
                  "total": 8516,
                  "max_score": 2.3584287,
                  "hits": [
                    {
                      "_index": "404_netflow_2017_08_21",
                      "_type": "data",
                      "_id": "AV4EkRHFc42rLXmAsNPH",
                      "_score": 2.3584287,
                      "_source": {
                        "networkType": [
                          "SEARCH ENGINE"
                        ]
                      }
                    }
                  ]
                }
              }
            },
            {
              "key": "172.217.8.195",
              "doc_count": 8292,
              "bytes": {
                "value": 7845481
              },
              "top_hit": {
                "hits": {
                  "total": 8292,
                  "max_score": 2.3584287,
                  "hits": [
                    {
                      "_index": "404_netflow_2017_08_21",
                      "_type": "data",
                      "_id": "AV4DUTY_c42rLXmAgnzW",
                      "_score": 2.3584287,
                      "_source": {
                        "networkType": [
                          "CLOUD HOSTING",
                          "FILE HOSTING",
                          "SEARCH ENGINE",
                          "SOCIAL NETWORKING"
                        ]
                      }
                    }
                  ]
                }
              }
            },
            {
              "key": "23.218.76.161",
              "doc_count": 8289,
              "bytes": {
                "value": 65065576
              },
              "top_hit": {
                "hits": {
                  "total": 8289,
                  "max_score": 2.3584287,
                  "hits": [
                    {
                      "_index": "404_netflow_2017_08_21",
                      "_type": "data",
                      "_id": "AV4FA_P4c42rLXmA3g1_",
                      "_score": 2.3584287,
                      "_source": {
                        "networkType": [
                          "CDN",
                          "CLOUD HOSTING",
                          "SOCIAL NETWORKING"
                        ]
                      }
                    }
                  ]
                }
              }
            },
            {
              "key": "107.20.160.227",
              "doc_count": 8258,
              "bytes": {
                "value": 10461249
              },
              "top_hit": {
                "hits": {
                  "total": 8258,
                  "max_score": 2.3584287,
                  "hits": [
                    {
                      "_index": "404_netflow_2017_08_21",
                      "_type": "data",
                      "_id": "AV4FA_Poc42rLXmA3gb3",
                      "_score": 2.3584287,
                      "_source": {
                        "networkType": [
                          "CDN",
                          "CLOUD HOSTING"
                        ]
                      }
                    }
                  ]
                }
              }
            },
            {
              "key": "98.139.225.43",
              "doc_count": 8229,
              "bytes": {
                "value": 3104111
              },
              "top_hit": {
                "hits": {
                  "total": 8229,
                  "max_score": 2.3565366,
                  "hits": [
                    {
                      "_index": "404_netflow_2017_08_17",
                      "_type": "data",
                      "_id": "AV3v6JmLc42rLXmA3V2Z",
                      "_score": 2.3565366,
                      "_source": {
                        "networkType": [
                          "SEARCH ENGINE"
                        ]
                      }
                    }
                  ]
                }
              }
            },
            {
              "key": "13.107.21.200",
              "doc_count": 8170,
              "bytes": {
                "value": 33813009
              },
              "top_hit": {
                "hits": {
                  "total": 8170,
                  "max_score": 2.3584287,
                  "hits": [
                    {
                      "_index": "404_netflow_2017_08_21",
                      "_type": "data",
                      "_id": "AV4DtC1nc42rLXmAkH4i",
                      "_score": 2.3584287,
                      "_source": {
                        "networkType": [
                          "CLOUD HOSTING",
                          "SEARCH ENGINE",
                          "SOCIAL NETWORKING"
                        ]
                      }
                    }
                  ]
                }
              }
            },
            {
              "key": "52.206.148.77",
              "doc_count": 8141,
              "bytes": {
                "value": 33365176
              },
              "top_hit": {
                "hits": {
                  "total": 8141,
                  "max_score": 2.3697739,
                  "hits": [
                    {
                      "_index": "404_netflow_2017_08_20",
                      "_type": "data",
                      "_id": "AV4ATZi9A4NVhZlY6w7A",
                      "_score": 2.3697739,
                      "_source": {
                        "networkType": [
                          "CLOUD HOSTING",
                          "ENTERTAINMENT",
                          "SEARCH ENGINE",
                          "SOCIAL NETWORKING"
                        ]
                      }
                    }
                  ]
                }
              }
            },
            {
              "key": "98.138.49.44",
              "doc_count": 8007,
              "bytes": {
                "value": 2979942
              },
              "top_hit": {
                "hits": {
                  "total": 8007,
                  "max_score": 2.3584287,
                  "hits": [
                    {
                      "_index": "404_netflow_2017_08_21",
                      "_type": "data",
                      "_id": "AV4EkRVEc42rLXmAsPOg",
                      "_score": 2.3584287,
                      "_source": {
                        "networkType": [
                          "SEARCH ENGINE"
                        ]
                      }
                    }
                  ]
                }
              }
            },
            {
              "key": "216.58.192.142",
              "doc_count": 7979,
              "bytes": {
                "value": 2056502
              },
              "top_hit": {
                "hits": {
                  "total": 7979,
                  "max_score": 2.3565366,
                  "hits": [
                    {
                      "_index": "404_netflow_2017_08_17",
                      "_type": "data",
                      "_id": "AV3vO-3sc42rLXmA1qWs",
                      "_score": 2.3565366,
                      "_source": {
                        "networkType": [
                          "CLOUD HOSTING",
                          "FILE HOSTING",
                          "SEARCH ENGINE",
                          "SOCIAL NETWORKING"
                        ]
                      }
                    }
                  ]
                }
              }
            },
            {
              "key": "152.163.66.165",
              "doc_count": 7711,
              "bytes": {
                "value": 4070286
              },
              "top_hit": {
                "hits": {
                  "total": 7711,
                  "max_score": 2.3584287,
                  "hits": [
                    {
                      "_index": "404_netflow_2017_08_21",
                      "_type": "data",
                      "_id": "AV4FA_Poc42rLXmA3gdD",
                      "_score": 2.3584287,
                      "_source": {
                        "networkType": [
                          "SEARCH ENGINE"
                        ]
                      }
                    }
                  ]
                }
              }
            },
            {
              "key": "162.125.18.133",
              "doc_count": 7700,
              "bytes": {
                "value": 8333003
              },
              "top_hit": {
                "hits": {
                  "total": 7700,
                  "max_score": 2.3584287,
                  "hits": [
                    {
                      "_index": "404_netflow_2017_08_21",
                      "_type": "data",
                      "_id": "AV4FAtspc42rLXmA3bIO",
                      "_score": 2.3584287,
                      "_source": {
                        "networkType": [
                          "FILE HOSTING"
                        ]
                      }
                    }
                  ]
                }
              }
            },
            {
              "key": "146.112.61.106",
              "doc_count": 7405,
              "bytes": {
                "value": 4796420
              },
              "top_hit": {
                "hits": {
                  "total": 7405,
                  "max_score": 2.3584287,
                  "hits": [
                    {
                      "_index": "404_netflow_2017_08_21",
                      "_type": "data",
                      "_id": "AV4EkRM3c42rLXmAsN_K",
                      "_score": 2.3584287,
                      "_source": {
                        "networkType": [
                          ""
                        ]
                      }
                    }
                  ]
                }
              }
            },
            {
              "key": "107.20.153.130",
              "doc_count": 7283,
              "bytes": {
                "value": 7812459
              },
              "top_hit": {
                "hits": {
                  "total": 7283,
                  "max_score": 2.3697739,
                  "hits": [
                    {
                      "_index": "404_netflow_2017_08_20",
                      "_type": "data",
                      "_id": "AV4BHl9-A4NVhZlYDXjP",
                      "_score": 2.3697739,
                      "_source": {
                        "networkType": [
                          "CDN",
                          "CLOUD HOSTING"
                        ]
                      }
                    }
                  ]
                }
              }
            },
            {
              "key": "172.217.0.3",
              "doc_count": 7185,
              "bytes": {
                "value": 7111761
              },
              "top_hit": {
                "hits": {
                  "total": 7185,
                  "max_score": 2.3561282,
                  "hits": [
                    {
                      "_index": "404_netflow_2017_08_18",
                      "_type": "data",
                      "_id": "AV30UZu6c42rLXmArlSF",
                      "_score": 2.3561282,
                      "_source": {
                        "networkType": [
                          "CLOUD HOSTING",
                          "FILE HOSTING",
                          "SEARCH ENGINE",
                          "SOCIAL NETWORKING"
                        ]
                      }
                    }
                  ]
                }
              }
            },
            {
              "key": "72.21.91.29",
              "doc_count": 7056,
              "bytes": {
                "value": 4184538
              },
              "top_hit": {
                "hits": {
                  "total": 7056,
                  "max_score": 2.3584287,
                  "hits": [
                    {
                      "_index": "404_netflow_2017_08_21",
                      "_type": "data",
                      "_id": "AV4Eir0vc42rLXmAqHVd",
                      "_score": 2.3584287,
                      "_source": {
                        "networkType": [
                          ""
                        ]
                      }
                    }
                  ]
                }
              }
            },
            {
              "key": "72.25.3.239",
              "doc_count": 7041,
              "bytes": {
                "value": 127902349
              },
              "top_hit": {
                "hits": {
                  "total": 7041,
                  "max_score": 2.3584287,
                  "hits": [
                    {
                      "_index": "404_netflow_2017_08_21",
                      "_type": "data",
                      "_id": "AV4FA_Ptc42rLXmA3gwg",
                      "_score": 2.3584287,
                      "_source": {
                        "networkType": [
                          ""
                        ]
                      }
                    }
                  ]
                }
              }
            },
            {
              "key": "157.240.2.21",
              "doc_count": 6758,
              "bytes": {
                "value": 171834063
              },
              "top_hit": {
                "hits": {
                  "total": 6758,
                  "max_score": 2.3584287,
                  "hits": [
                    {
                      "_index": "404_netflow_2017_08_21",
                      "_type": "data",
                      "_id": "AV4Eiq5-c42rLXmAqABl",
                      "_score": 2.3584287,
                      "_source": {
                        "networkType": [
                          "SOCIAL NETWORKING"
                        ]
                      }
                    }
                  ]
                }
              }
            },
            {
              "key": "107.20.144.156",
              "doc_count": 6578,
              "bytes": {
                "value": 6668449
              },
              "top_hit": {
                "hits": {
                  "total": 6578,
                  "max_score": 2.3697739,
                  "hits": [
                    {
                      "_index": "404_netflow_2017_08_20",
                      "_type": "data",
                      "_id": "AV4AbA5GA4NVhZlY79a1",
                      "_score": 2.3697739,
                      "_source": {
                        "networkType": [
                          "CDN",
                          "CLOUD HOSTING"
                        ]
                      }
                    }
                  ]
                }
              }
            },
            {
              "key": "107.20.155.122",
              "doc_count": 6574,
              "bytes": {
                "value": 7208967
              },
              "top_hit": {
                "hits": {
                  "total": 6574,
                  "max_score": 2.3584287,
                  "hits": [
                    {
                      "_index": "404_netflow_2017_08_21",
                      "_type": "data",
                      "_id": "AV4E71fEc42rLXmA1dxB",
                      "_score": 2.3584287,
                      "_source": {
                        "networkType": [
                          "CDN",
                          "CLOUD HOSTING"
                        ]
                      }
                    }
                  ]
                }
              }
            },
            {
              "key": "69.147.82.61",
              "doc_count": 6572,
              "bytes": {
                "value": 25056791
              },
              "top_hit": {
                "hits": {
                  "total": 6572,
                  "max_score": 2.3584287,
                  "hits": [
                    {
                      "_index": "404_netflow_2017_08_21",
                      "_type": "data",
                      "_id": "AV4E71gmc42rLXmA1fzn",
                      "_score": 2.3584287,
                      "_source": {
                        "networkType": [
                          ""
                        ]
                      }
                    }
                  ]
                }
              }
            },
            {
              "key": "70.198.203.120",
              "doc_count": 6554,
              "bytes": {
                "value": 149212087
              },
              "top_hit": {
                "hits": {
                  "total": 6554,
                  "max_score": 2.2635016,
                  "hits": [
                    {
                      "_index": "404_netflow_2017_08_16",
                      "_type": "data",
                      "_id": "AV3sIF0Jc42rLXmACn42",
                      "_score": 2.2635016,
                      "_source": {
                        "networkType": [
                          ""
                        ]
                      }
                    }
                  ]
                }
              }
            },
            {
              "key": "31.13.69.197",
              "doc_count": 6527,
              "bytes": {
                "value": 35958994
              },
              "top_hit": {
                "hits": {
                  "total": 6527,
                  "max_score": 2.3584287,
                  "hits": [
                    {
                      "_index": "404_netflow_2017_08_21",
                      "_type": "data",
                      "_id": "AV4EitcSc42rLXmAqTgT",
                      "_score": 2.3584287,
                      "_source": {
                        "networkType": [
                          "SOCIAL NETWORKING"
                        ]
                      }
                    }
                  ]
                }
              }
            },
            {
              "key": "172.217.0.2",
              "doc_count": 6451,
              "bytes": {
                "value": 3188631
              },
              "top_hit": {
                "hits": {
                  "total": 6451,
                  "max_score": 2.3561282,
                  "hits": [
                    {
                      "_index": "404_netflow_2017_08_18",
                      "_type": "data",
                      "_id": "AV31H-O5c42rLXmA0_ZO",
                      "_score": 2.3561282,
                      "_source": {
                        "networkType": [
                          "CLOUD HOSTING",
                          "FILE HOSTING",
                          "SEARCH ENGINE",
                          "SOCIAL NETWORKING"
                        ]
                      }
                    }
                  ]
                }
              }
            },
            {
              "key": "107.20.161.47",
              "doc_count": 6446,
              "bytes": {
                "value": 7661947
              },
              "top_hit": {
                "hits": {
                  "total": 6446,
                  "max_score": 2.3584287,
                  "hits": [
                    {
                      "_index": "404_netflow_2017_08_21",
                      "_type": "data",
                      "_id": "AV4FA_Poc42rLXmA3gap",
                      "_score": 2.3584287,
                      "_source": {
                        "networkType": [
                          "CDN",
                          "CLOUD HOSTING"
                        ]
                      }
                    }
                  ]
                }
              }
            },
            {
              "key": "131.253.61.80",
              "doc_count": 6443,
              "bytes": {
                "value": 5630417
              },
              "top_hit": {
                "hits": {
                  "total": 6443,
                  "max_score": 2.3697739,
                  "hits": [
                    {
                      "_index": "404_netflow_2017_08_20",
                      "_type": "data",
                      "_id": "AV4ATZjLA4NVhZlY6xfT",
                      "_score": 2.3697739,
                      "_source": {
                        "networkType": [
                          "CLOUD HOSTING",
                          "SEARCH ENGINE",
                          "SOCIAL NETWORKING"
                        ]
                      }
                    }
                  ]
                }
              }
            },
            {
              "key": "75.101.139.244",
              "doc_count": 6404,
              "bytes": {
                "value": 6679825
              },
              "top_hit": {
                "hits": {
                  "total": 6404,
                  "max_score": 2.3697739,
                  "hits": [
                    {
                      "_index": "404_netflow_2017_08_20",
                      "_type": "data",
                      "_id": "AV4ASSy_A4NVhZlY6naj",
                      "_score": 2.3697739,
                      "_source": {
                        "networkType": [
                          "CDN",
                          "CLOUD HOSTING",
                          "ENTERTAINMENT",
                          "SEARCH ENGINE",
                          "SOCIAL NETWORKING"
                        ]
                      }
                    }
                  ]
                }
              }
            },
            {
              "key": "131.253.61.66",
              "doc_count": 6401,
              "bytes": {
                "value": 6194422
              },
              "top_hit": {
                "hits": {
                  "total": 6401,
                  "max_score": 2.3697739,
                  "hits": [
                    {
                      "_index": "404_netflow_2017_08_20",
                      "_type": "data",
                      "_id": "AV4ATZjLA4NVhZlY6xf2",
                      "_score": 2.3697739,
                      "_source": {
                        "networkType": [
                          "CLOUD HOSTING",
                          "SEARCH ENGINE",
                          "SOCIAL NETWORKING"
                        ]
                      }
                    }
                  ]
                }
              }
            },
            {
              "key": "172.217.8.164",
              "doc_count": 6398,
              "bytes": {
                "value": 18375330
              },
              "top_hit": {
                "hits": {
                  "total": 6398,
                  "max_score": 2.3584287,
                  "hits": [
                    {
                      "_index": "404_netflow_2017_08_21",
                      "_type": "data",
                      "_id": "AV4FA_QVc42rLXmA3iTT",
                      "_score": 2.3584287,
                      "_source": {
                        "networkType": [
                          "CLOUD HOSTING",
                          "FILE HOSTING",
                          "SEARCH ENGINE",
                          "SOCIAL NETWORKING"
                        ]
                      }
                    }
                  ]
                }
              }
            },
            {
              "key": "69.147.82.60",
              "doc_count": 6349,
              "bytes": {
                "value": 14677386
              },
              "top_hit": {
                "hits": {
                  "total": 6349,
                  "max_score": 2.3561282,
                  "hits": [
                    {
                      "_index": "404_netflow_2017_08_18",
                      "_type": "data",
                      "_id": "AV31XNEkc42rLXmA6uQF",
                      "_score": 2.3561282,
                      "_source": {
                        "networkType": [
                          ""
                        ]
                      }
                    }
                  ]
                }
              }
            },
            {
              "key": "54.83.52.254",
              "doc_count": 6306,
              "bytes": {
                "value": 6486525
              },
              "top_hit": {
                "hits": {
                  "total": 6306,
                  "max_score": 2.3584287,
                  "hits": [
                    {
                      "_index": "404_netflow_2017_08_21",
                      "_type": "data",
                      "_id": "AV4DPBTLc42rLXmAf45b",
                      "_score": 2.3584287,
                      "_source": {
                        "networkType": [
                          ""
                        ]
                      }
                    }
                  ]
                }
              }
            },
            {
              "key": "131.253.61.82",
              "doc_count": 6254,
              "bytes": {
                "value": 5789763
              },
              "top_hit": {
                "hits": {
                  "total": 6254,
                  "max_score": 2.3697739,
                  "hits": [
                    {
                      "_index": "404_netflow_2017_08_20",
                      "_type": "data",
                      "_id": "AV4ATZjSA4NVhZlY6xtf",
                      "_score": 2.3697739,
                      "_source": {
                        "networkType": [
                          "CLOUD HOSTING",
                          "SEARCH ENGINE",
                          "SOCIAL NETWORKING"
                        ]
                      }
                    }
                  ]
                }
              }
            },
            {
              "key": "131.253.61.84",
              "doc_count": 6218,
              "bytes": {
                "value": 4952416
              },
              "top_hit": {
                "hits": {
                  "total": 6218,
                  "max_score": 2.3697739,
                  "hits": [
                    {
                      "_index": "404_netflow_2017_08_20",
                      "_type": "data",
                      "_id": "AV4ARjgCA4NVhZlY6eoR",
                      "_score": 2.3697739,
                      "_source": {
                        "networkType": [
                          "CLOUD HOSTING",
                          "SEARCH ENGINE",
                          "SOCIAL NETWORKING"
                        ]
                      }
                    }
                  ]
                }
              }
            },
            {
              "key": "131.253.61.100",
              "doc_count": 6212,
              "bytes": {
                "value": 4090280
              },
              "top_hit": {
                "hits": {
                  "total": 6212,
                  "max_score": 2.3697739,
                  "hits": [
                    {
                      "_index": "404_netflow_2017_08_20",
                      "_type": "data",
                      "_id": "AV4ATZjSA4NVhZlY6xqm",
                      "_score": 2.3697739,
                      "_source": {
                        "networkType": [
                          "CLOUD HOSTING",
                          "SEARCH ENGINE",
                          "SOCIAL NETWORKING"
                        ]
                      }
                    }
                  ]
                }
              }
            },
            {
              "key": "131.253.61.64",
              "doc_count": 6196,
              "bytes": {
                "value": 4328252
              },
              "top_hit": {
                "hits": {
                  "total": 6196,
                  "max_score": 2.3697739,
                  "hits": [
                    {
                      "_index": "404_netflow_2017_08_20",
                      "_type": "data",
                      "_id": "AV4AVT_EA4NVhZlY7CrF",
                      "_score": 2.3697739,
                      "_source": {
                        "networkType": [
                          "CLOUD HOSTING",
                          "SEARCH ENGINE",
                          "SOCIAL NETWORKING"
                        ]
                      }
                    }
                  ]
                }
              }
            }
          ]
        }
      }
    }
  }
}
