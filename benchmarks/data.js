window.BENCHMARK_DATA = {
  "lastUpdate": 1611715727036,
  "repoUrl": "https://github.com/vtdat/opentelemetry-python",
  "entries": {
    "OpenTelemetry Python Benchmarks - Python 3.5 - propagator": [
      {
        "commit": {
          "author": {
            "email": "lechen@microsoft.com",
            "name": "Leighton Chen",
            "username": "lzchen"
          },
          "committer": {
            "email": "noreply@github.com",
            "name": "GitHub",
            "username": "web-flow"
          },
          "distinct": true,
          "id": "ad894b19f531706645491869151f63a4138cf768",
          "message": "Update some docs (#1553)",
          "timestamp": "2021-01-26T15:55:29-08:00",
          "tree_id": "b709949515ffab36df095f7149f9310176d326d8",
          "url": "https://github.com/vtdat/opentelemetry-python/commit/ad894b19f531706645491869151f63a4138cf768"
        },
        "date": 1611715724497,
        "tool": "pytest",
        "benches": [
          {
            "name": "propagator/opentelemetry-propagator-b3/tests/performance/benchmarks/trace/propagation/test_benchmark_b3_format.py::test_extract_single_header",
            "value": 40589.752492814194,
            "unit": "iter/sec",
            "range": "stddev: 0.00001950630185906126",
            "extra": "mean: 24.636760230972953 usec\nrounds: 7795"
          },
          {
            "name": "propagator/opentelemetry-propagator-b3/tests/performance/benchmarks/trace/propagation/test_benchmark_b3_format.py::test_inject_empty_context",
            "value": 103344.30100964417,
            "unit": "iter/sec",
            "range": "stddev: 0.00002377843731116822",
            "extra": "mean: 9.676392314141049 usec\nrounds: 47620"
          }
        ]
      }
    ]
  }
}