import React from 'react';
import { HighlightCard } from '../../components/HighlightCard';
import {
  Container,
  Header,
  Icon,
  Photo,
  User,
  UserGreeting, UserInfo,
  UserName, UserWrapper,
  HighlightCards
} from './styles';

export function Dashboard() {
  return (
    <Container>
      <Header>
        <UserWrapper>
          <UserInfo>
            <Photo source={{ uri: 'https://avatars.githubusercontent.com/u/26815672?v=4' }} />
            <User>
              <UserGreeting>Olá,</UserGreeting>
              <UserName>Vagner</UserName>
            </User>
          </UserInfo>
          <Icon name='power' />
        </UserWrapper>
      </Header>

      <HighlightCards>
        <HighlightCard type='up' title='Entradas'
          amount='R$ 17.400,00' lastTransaction='Última entrada foi dia 13 de abril'
        />
        <HighlightCard type='down' title='Saídas'
          amount='R$ 12.435,00' lastTransaction='Última saída foi dia 25 de abril'
        />
        <HighlightCard type='total' title='Total'
          amount='R$ 4.965,00' lastTransaction='01 à 25 de abril'
        />
      </HighlightCards>

    </Container>
  );
}