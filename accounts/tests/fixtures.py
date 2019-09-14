from unittest.mock import Mock

import pytest
from unittest import mock

# from pytest_mock import mocker


@pytest.fixture
def taka_tam_fixturka():
    return True

@pytest.fixture
def hello_mock(monkeypatch):
    m = Mock(return_value='eloelo')
    monkeypatch.setattr('accounts.admin.CustomUser.say_hello', m)
    return m