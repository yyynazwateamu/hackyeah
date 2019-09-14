import time
from unittest import mock, TestCase
from unittest.mock import Mock

from timesy.views import check_hello_timesy
from ..admin import check_hello

import pytest
from ..models import UserProfile
import factory

#
#
# @pytest.mark.django_db
# def test_user_creation(taka_tam_fixturka):
#     print(taka_tam_fixturka, "siema")
#     CustomUser.objects.create(username='admin')
#     assert CustomUser.objects.first().username == 'admin'
#
# @pytest.mark.django_db
# def test_profile_creation():
#     print("Czesc")
#     admin_user = CustomUser.objects.create(username='admin')
#     UserProfile.objects.create(user_id=admin_user.id)
#     assert UserProfile.objects.first().user.username == 'admin'
#     assert True, 'should return true'
#     # assert False

class TestModel(TestCase):

    @mock.patch('accounts.admin.TestUser.say_hello')
    def test_Xd(self, m_hello_timesy):
        m_hello_timesy.return_value = 'eloelo'
        # monkeypatch.setattr(CustomUser, 'say_hello', m_hello_timesy)
        print(check_hello(), check_hello_timesy())
        assert check_hello().hello() == 'eloelo'
        # assert CustomUser.say_hello() == 'eloelo'
        assert check_hello_timesy() == 'eloelo'

    # def test_Xd2(self, hello_mock):
    #     assert check_hello() == 'eloelo'
    #     # assert CustomUser.say_hello() == 'eloelo'
    #     assert check_hello_timesy() == 'eloelo'
        # time.sleep(1)
