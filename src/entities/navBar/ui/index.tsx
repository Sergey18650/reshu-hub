import React from 'react';
import { Link } from 'shared/components/Link';
import { routes } from 'shared/models';
import { useTranslation } from 'react-i18next';
import * as S from './styled';

export function NavBar() {
  const { t } = useTranslation();

  return (
    <S.Wrapper>
      {Object.values(routes).map(({ name, path }) => (
        <Link
          key={path}
          to={path}
        >
          {t(name)}
        </Link>
      ))}
    </S.Wrapper>
  );
}
