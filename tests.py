import time
from math import sqrt

import pytest

@pytest.mark.parametrize('x, y', [(i, i*i) for i in range(10000)])
def test_which_fails(x, y):
    assert sqrt(y) == x