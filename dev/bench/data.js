window.BENCHMARK_DATA = {
  "lastUpdate": 1608865713704,
  "repoUrl": "https://github.com/leshow/tokio",
  "entries": {
    "sync_rwlock": [
      {
        "commit": {
          "author": {
            "email": "alice@ryhl.io",
            "name": "Alice Ryhl",
            "username": "Darksonn"
          },
          "committer": {
            "email": "noreply@github.com",
            "name": "GitHub",
            "username": "web-flow"
          },
          "distinct": true,
          "id": "69e62ef89e481e0fb29ce3ef4ddce1eea4114000",
          "message": "sync: make TryAcquireError public (#3250)\n\nThe [`Semaphore::try_acquire`][1] method currently returns a private error type.\r\n\r\n[1]: https://docs.rs/tokio/0.3/tokio/sync/struct.Semaphore.html#method.try_acquire",
          "timestamp": "2020-12-10T19:56:05-08:00",
          "tree_id": "0784747565f6583a726c85dfedcd0527d8373cc6",
          "url": "https://github.com/leshow/tokio/commit/69e62ef89e481e0fb29ce3ef4ddce1eea4114000"
        },
        "date": 1607707352802,
        "tool": "cargo",
        "benches": [
          {
            "name": "read_concurrent_contended",
            "value": 841,
            "range": "± 5",
            "unit": "ns/iter"
          },
          {
            "name": "read_concurrent_contended_multi",
            "value": 12935,
            "range": "± 2928",
            "unit": "ns/iter"
          },
          {
            "name": "read_concurrent_uncontended",
            "value": 869,
            "range": "± 8",
            "unit": "ns/iter"
          },
          {
            "name": "read_concurrent_uncontended_multi",
            "value": 13299,
            "range": "± 3244",
            "unit": "ns/iter"
          },
          {
            "name": "read_uncontended",
            "value": 493,
            "range": "± 9",
            "unit": "ns/iter"
          }
        ]
      }
    ],
    "rt_multi_threaded": [
      {
        "commit": {
          "author": {
            "email": "alice@ryhl.io",
            "name": "Alice Ryhl",
            "username": "Darksonn"
          },
          "committer": {
            "email": "noreply@github.com",
            "name": "GitHub",
            "username": "web-flow"
          },
          "distinct": true,
          "id": "69e62ef89e481e0fb29ce3ef4ddce1eea4114000",
          "message": "sync: make TryAcquireError public (#3250)\n\nThe [`Semaphore::try_acquire`][1] method currently returns a private error type.\r\n\r\n[1]: https://docs.rs/tokio/0.3/tokio/sync/struct.Semaphore.html#method.try_acquire",
          "timestamp": "2020-12-10T19:56:05-08:00",
          "tree_id": "0784747565f6583a726c85dfedcd0527d8373cc6",
          "url": "https://github.com/leshow/tokio/commit/69e62ef89e481e0fb29ce3ef4ddce1eea4114000"
        },
        "date": 1607707363586,
        "tool": "cargo",
        "benches": [
          {
            "name": "chained_spawn",
            "value": 157636,
            "range": "± 3508",
            "unit": "ns/iter"
          },
          {
            "name": "ping_pong",
            "value": 622756,
            "range": "± 20095",
            "unit": "ns/iter"
          },
          {
            "name": "spawn_many",
            "value": 4631154,
            "range": "± 707799",
            "unit": "ns/iter"
          },
          {
            "name": "yield_many",
            "value": 18330893,
            "range": "± 2212937",
            "unit": "ns/iter"
          }
        ]
      },
      {
        "commit": {
          "author": {
            "email": "lnicola@users.noreply.github.com",
            "name": "Laurențiu Nicola",
            "username": "lnicola"
          },
          "committer": {
            "email": "noreply@github.com",
            "name": "GitHub",
            "username": "web-flow"
          },
          "distinct": true,
          "id": "1eefbc250ad49d9086bdb2b8be4404bd445f63fb",
          "message": "docs: remove stream feature from docs (#3335)",
          "timestamp": "2020-12-24T23:17:18+09:00",
          "tree_id": "f3657463c2d44548e4d71f8454ce672ffeb0b45f",
          "url": "https://github.com/leshow/tokio/commit/1eefbc250ad49d9086bdb2b8be4404bd445f63fb"
        },
        "date": 1608865709861,
        "tool": "cargo",
        "benches": [
          {
            "name": "chained_spawn",
            "value": 169704,
            "range": "± 35283",
            "unit": "ns/iter"
          },
          {
            "name": "ping_pong",
            "value": 662471,
            "range": "± 103985",
            "unit": "ns/iter"
          },
          {
            "name": "spawn_many",
            "value": 4792650,
            "range": "± 965437",
            "unit": "ns/iter"
          },
          {
            "name": "yield_many",
            "value": 19644480,
            "range": "± 2901310",
            "unit": "ns/iter"
          }
        ]
      }
    ],
    "sync_semaphore": [
      {
        "commit": {
          "author": {
            "email": "alice@ryhl.io",
            "name": "Alice Ryhl",
            "username": "Darksonn"
          },
          "committer": {
            "email": "noreply@github.com",
            "name": "GitHub",
            "username": "web-flow"
          },
          "distinct": true,
          "id": "69e62ef89e481e0fb29ce3ef4ddce1eea4114000",
          "message": "sync: make TryAcquireError public (#3250)\n\nThe [`Semaphore::try_acquire`][1] method currently returns a private error type.\r\n\r\n[1]: https://docs.rs/tokio/0.3/tokio/sync/struct.Semaphore.html#method.try_acquire",
          "timestamp": "2020-12-10T19:56:05-08:00",
          "tree_id": "0784747565f6583a726c85dfedcd0527d8373cc6",
          "url": "https://github.com/leshow/tokio/commit/69e62ef89e481e0fb29ce3ef4ddce1eea4114000"
        },
        "date": 1607707364914,
        "tool": "cargo",
        "benches": [
          {
            "name": "contended_concurrent_multi",
            "value": 13659,
            "range": "± 2355",
            "unit": "ns/iter"
          },
          {
            "name": "contended_concurrent_single",
            "value": 967,
            "range": "± 5",
            "unit": "ns/iter"
          },
          {
            "name": "uncontended",
            "value": 539,
            "range": "± 11",
            "unit": "ns/iter"
          },
          {
            "name": "uncontended_concurrent_multi",
            "value": 14030,
            "range": "± 2562",
            "unit": "ns/iter"
          },
          {
            "name": "uncontended_concurrent_single",
            "value": 952,
            "range": "± 4",
            "unit": "ns/iter"
          }
        ]
      },
      {
        "commit": {
          "author": {
            "email": "lnicola@users.noreply.github.com",
            "name": "Laurențiu Nicola",
            "username": "lnicola"
          },
          "committer": {
            "email": "noreply@github.com",
            "name": "GitHub",
            "username": "web-flow"
          },
          "distinct": true,
          "id": "1eefbc250ad49d9086bdb2b8be4404bd445f63fb",
          "message": "docs: remove stream feature from docs (#3335)",
          "timestamp": "2020-12-24T23:17:18+09:00",
          "tree_id": "f3657463c2d44548e4d71f8454ce672ffeb0b45f",
          "url": "https://github.com/leshow/tokio/commit/1eefbc250ad49d9086bdb2b8be4404bd445f63fb"
        },
        "date": 1608865704699,
        "tool": "cargo",
        "benches": [
          {
            "name": "contended_concurrent_multi",
            "value": 12897,
            "range": "± 1916",
            "unit": "ns/iter"
          },
          {
            "name": "contended_concurrent_single",
            "value": 814,
            "range": "± 6",
            "unit": "ns/iter"
          },
          {
            "name": "uncontended",
            "value": 480,
            "range": "± 12",
            "unit": "ns/iter"
          },
          {
            "name": "uncontended_concurrent_multi",
            "value": 13088,
            "range": "± 2790",
            "unit": "ns/iter"
          },
          {
            "name": "uncontended_concurrent_single",
            "value": 814,
            "range": "± 4",
            "unit": "ns/iter"
          }
        ]
      }
    ],
    "sync_mpsc": [
      {
        "commit": {
          "author": {
            "email": "alice@ryhl.io",
            "name": "Alice Ryhl",
            "username": "Darksonn"
          },
          "committer": {
            "email": "noreply@github.com",
            "name": "GitHub",
            "username": "web-flow"
          },
          "distinct": true,
          "id": "69e62ef89e481e0fb29ce3ef4ddce1eea4114000",
          "message": "sync: make TryAcquireError public (#3250)\n\nThe [`Semaphore::try_acquire`][1] method currently returns a private error type.\r\n\r\n[1]: https://docs.rs/tokio/0.3/tokio/sync/struct.Semaphore.html#method.try_acquire",
          "timestamp": "2020-12-10T19:56:05-08:00",
          "tree_id": "0784747565f6583a726c85dfedcd0527d8373cc6",
          "url": "https://github.com/leshow/tokio/commit/69e62ef89e481e0fb29ce3ef4ddce1eea4114000"
        },
        "date": 1607707390766,
        "tool": "cargo",
        "benches": [
          {
            "name": "contention_bounded",
            "value": 6457932,
            "range": "± 2065349",
            "unit": "ns/iter"
          },
          {
            "name": "contention_bounded_full",
            "value": 6533472,
            "range": "± 1066903",
            "unit": "ns/iter"
          },
          {
            "name": "contention_unbounded",
            "value": 6113311,
            "range": "± 2267790",
            "unit": "ns/iter"
          },
          {
            "name": "create_100_000_medium",
            "value": 620,
            "range": "± 61",
            "unit": "ns/iter"
          },
          {
            "name": "create_100_medium",
            "value": 606,
            "range": "± 59",
            "unit": "ns/iter"
          },
          {
            "name": "create_1_medium",
            "value": 585,
            "range": "± 73",
            "unit": "ns/iter"
          },
          {
            "name": "send_large",
            "value": 40435,
            "range": "± 1959",
            "unit": "ns/iter"
          },
          {
            "name": "send_medium",
            "value": 815,
            "range": "± 81",
            "unit": "ns/iter"
          },
          {
            "name": "uncontented_bounded",
            "value": 1069471,
            "range": "± 91224",
            "unit": "ns/iter"
          },
          {
            "name": "uncontented_unbounded",
            "value": 758648,
            "range": "± 79179",
            "unit": "ns/iter"
          }
        ]
      },
      {
        "commit": {
          "author": {
            "email": "lnicola@users.noreply.github.com",
            "name": "Laurențiu Nicola",
            "username": "lnicola"
          },
          "committer": {
            "email": "noreply@github.com",
            "name": "GitHub",
            "username": "web-flow"
          },
          "distinct": true,
          "id": "1eefbc250ad49d9086bdb2b8be4404bd445f63fb",
          "message": "docs: remove stream feature from docs (#3335)",
          "timestamp": "2020-12-24T23:17:18+09:00",
          "tree_id": "f3657463c2d44548e4d71f8454ce672ffeb0b45f",
          "url": "https://github.com/leshow/tokio/commit/1eefbc250ad49d9086bdb2b8be4404bd445f63fb"
        },
        "date": 1608865708542,
        "tool": "cargo",
        "benches": [
          {
            "name": "contention_bounded",
            "value": 7018146,
            "range": "± 2949432",
            "unit": "ns/iter"
          },
          {
            "name": "contention_bounded_full",
            "value": 6933526,
            "range": "± 2606952",
            "unit": "ns/iter"
          },
          {
            "name": "contention_unbounded",
            "value": 6915731,
            "range": "± 2947965",
            "unit": "ns/iter"
          },
          {
            "name": "create_100_000_medium",
            "value": 686,
            "range": "± 123",
            "unit": "ns/iter"
          },
          {
            "name": "create_100_medium",
            "value": 663,
            "range": "± 35",
            "unit": "ns/iter"
          },
          {
            "name": "create_1_medium",
            "value": 682,
            "range": "± 241",
            "unit": "ns/iter"
          },
          {
            "name": "send_large",
            "value": 83467,
            "range": "± 5807",
            "unit": "ns/iter"
          },
          {
            "name": "send_medium",
            "value": 1403,
            "range": "± 190",
            "unit": "ns/iter"
          },
          {
            "name": "uncontented_bounded",
            "value": 1132006,
            "range": "± 43947",
            "unit": "ns/iter"
          },
          {
            "name": "uncontented_unbounded",
            "value": 826875,
            "range": "± 35179",
            "unit": "ns/iter"
          }
        ]
      }
    ]
  }
}